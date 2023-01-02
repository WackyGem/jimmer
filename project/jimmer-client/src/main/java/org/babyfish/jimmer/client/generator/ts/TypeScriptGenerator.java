package org.babyfish.jimmer.client.generator.ts;

import org.babyfish.jimmer.client.generator.Generator;
import org.babyfish.jimmer.client.generator.GeneratorException;
import org.babyfish.jimmer.client.generator.ts.simple.*;
import org.babyfish.jimmer.client.meta.*;

import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.util.*;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

public class TypeScriptGenerator implements Generator {

    private final String moduleName;

    private final int indent;

    private final boolean anonymous;

    public TypeScriptGenerator() {
        this.moduleName = "Api";
        this.indent = 4;
        this.anonymous = false;
    }

    public TypeScriptGenerator(String moduleName) {
        this.moduleName = moduleName;
        this.indent = 4;
        this.anonymous = false;
    }

    public TypeScriptGenerator(String moduleName, int indent) {
        this.moduleName = moduleName;
        this.indent = indent;
        this.anonymous = false;
    }

    public TypeScriptGenerator(String moduleName, int indent, boolean anonymous) {
        this.moduleName = moduleName;
        this.indent = indent;
        this.anonymous = anonymous;
    }

    @Override
    public void generate(Metadata metadata, OutputStream out) {
        try {
            ZipOutputStream zipOut = new ZipOutputStream(out);
            generate0(new Context(metadata, zipOut, moduleName, indent), zipOut);
            zipOut.finish();
        } catch (IOException | RuntimeException | Error ex) {
            throw new GeneratorException(ex);
        }
    }

    private void generate0(Context ctx, ZipOutputStream zipOut) throws IOException {

        zipOut.putNextEntry(new ZipEntry(ctx.getModuleFile().toString()));
        new ModuleWriter(ctx).flush();
        zipOut.closeEntry();

        zipOut.putNextEntry(new ZipEntry(ExecutorWriter.FILE.toString()));
        new ExecutorWriter(ctx).flush();
        zipOut.closeEntry();

        zipOut.putNextEntry(new ZipEntry(DynamicWriter.FILE.toString()));
        new DynamicWriter(ctx).flush();
        zipOut.closeEntry();

        zipOut.putNextEntry(new ZipEntry(RequestOfWriter.FILE.toString()));
        new RequestOfWriter(ctx).flush();
        zipOut.closeEntry();

        zipOut.putNextEntry(new ZipEntry(ResponseOfWriter.FILE.toString()));
        new ResponseOfWriter(ctx).flush();
        zipOut.closeEntry();

        zipOut.putNextEntry(new ZipEntry(ElementOfWriter.FILE.toString()));
        new ElementOfWriter(ctx).flush();
        zipOut.closeEntry();

        Map<String, Index> indexMap = new HashMap<>();
        for (Map.Entry<Service, File> e : ctx.getServiceFileMap().entrySet()) {
            Service service = e.getKey();
            File file = e.getValue();
            indexMap.computeIfAbsent(file.getDir(), Index::new).addObjectFile(file);
            zipOut.putNextEntry(new ZipEntry(file.toString()));
            new ServiceWriter(ctx, service, anonymous).flush();
            zipOut.closeEntry();
        }
        for (Map.Entry<Type, File> e : ctx.getTypeFilePairs()) {
            Type type = e.getKey();
            File file = e.getValue();
            indexMap.computeIfAbsent(file.getDir(), Index::new).addTypeFile(file);
            zipOut.putNextEntry(new ZipEntry(file.toString()));
            new TypeDefinitionWriter(ctx, type).flush();
            zipOut.closeEntry();
        }
        if (!anonymous) {
            for (Map.Entry<Class<?>, List<ImmutableObjectType>> e : ctx.getDtoMap().entrySet()) {
                Class<?> rawType = e.getKey();
                DtoWriter dtoWriter = new DtoWriter(ctx, rawType, e.getValue());
                indexMap.computeIfAbsent(dtoWriter.getFile().getDir(), Index::new).addTypeFile(dtoWriter.getFile());
                zipOut.putNextEntry(new ZipEntry(dtoWriter.getFile().toString()));
                dtoWriter.flush();
                zipOut.closeEntry();
            }
        }

        indexMap.computeIfAbsent("", Index::new)
                .addObjectFile(ctx.getModuleFile())
                .addTypeFile(ExecutorWriter.FILE)
                .addTypeFile(DynamicWriter.FILE)
                .addTypeFile(RequestOfWriter.FILE)
                .addTypeFile(ResponseOfWriter.FILE);
        for (Index index : indexMap.values()) {
            writeIndex(ctx, index, zipOut);
        }
    }

    private void writeIndex(Context ctx, Index index, ZipOutputStream zipOut) throws IOException {
        zipOut.putNextEntry(new ZipEntry(index.dir + "/index.ts"));
        OutputStreamWriter writer = new OutputStreamWriter(zipOut);
        for (File file : index.objectFiles) {
            writer.write(
                    "export { " +
                            file.getName() +
                            " } from './" +
                            file.getName() +
                            "';\n"
            );
            if (!anonymous && file != ctx.getModuleFile()) {
                writer.write(
                        "export type { " +
                                file.getName() +
                                "Options } from './" +
                                file.getName() +
                                "';\n"
                );
            }
        }
        for (File file : index.typeFiles) {
            writer.write(
                    "export type { " +
                            file.getName() +
                            " } from './" +
                            file.getName() +
                            "';\n"
            );
        }
        writer.flush();
        zipOut.closeEntry();
    }

    private static class Index {

        final String dir;

        final List<File> objectFiles = new ArrayList<>();

        final List<File> typeFiles = new ArrayList<>();

        public Index(String dir) {
            this.dir = dir;
        }

        public Index addObjectFile(File file) {
            objectFiles.add(file);
            return this;
        }

        public Index addTypeFile(File file) {
            typeFiles.add(file);
            return this;
        }
    }
}
