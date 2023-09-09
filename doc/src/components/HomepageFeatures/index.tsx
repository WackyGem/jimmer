import React, { useCallback, useMemo, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ViewMore } from '../ViewMore';
import { DynamicJoinProblem } from './DynamicJoinProblem';
import { Communication } from './Communication';
import { ObjectFetcher } from './ObjectFetcher';
import { SaveCommand } from './SaveCommand';
import { CacheConsistency } from './CacheConsistency';
import { Performance } from './Performance';
import { DtoExplosion, ObjectCache, AssociationCache, CalculatedCache, MultiViewCache } from '../Image';

export default function HomepageFeatures(): JSX.Element {

  const {i18n} = useDocusaurusContext();
  
  const features = useMemo<ReadonlyArray<FeatureItem>>(() => {
    const locale = i18n.currentLocale;
    return locale === 'zh' || locale == 'zh_CN' || locale == 'zh_CN' ?
      FEATURE_LIST_ZH :
      FEATURE_LIST_EN;
  }, []);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FEATURE_LIST_ZH: FeatureItem[] = [
  {
    title: '将RDBMS抽象为图数据库',
    description: (
      <>
        以任意形状的数据结构作为基本操作单元，甚至可处理包含自关联属性的无限深度数据结构，让开发人员脱离<ViewMore buttonText="DTO类型爆炸" variant="text"><DtoExplosion/></ViewMore>地狱
        <ul>
          <li>查询任意形状的数据结构：可以理解成ORM的GraphQL化<ObjectFetcher/></li>
          <li>保存任意形状的数据结构：快速实现复杂表单保存业务<SaveCommand/></li>
          <li>DTO语言：即使在某些特殊场景下，我们无法直接使用统一的ORM实体，不得不使用DTO对象，开发代价也仅仅是使用DTO语言定义这些DTO的形状而已， Jimmer能自动生成DTO定义、和实体的转化逻辑、甚至和数据库的交互逻辑。全然感觉不到传统技术方案中DTO爆炸带来的痛苦</li>
        </ul>
      </>
    ),
  },
  {
    title: '强大的缓存支持',
    description: (
      <ul>
        <li>是否使用缓存，对开发人员完全透明</li>
        <li>使用哪些缓存技术，由开发人员决定</li>
        <li>
          不仅支持简单的<ViewMore buttonText="对象缓存" variant="text"><ObjectCache/></ViewMore>，还支持属性级缓存，
          包括<ViewMore buttonText="关联缓存" variant='text'><AssociationCache/></ViewMore>
          和<ViewMore buttonText="计算缓存" variant='text'><CalculatedCache/></ViewMore>。
          最终提供任意形状的数据结构的缓存能力，而非简单对象的缓存能力
        </li>
        <li>
          以权限系统为代表技术常常导致不同用户看到不同的数据集，因此，Jimmer支持<ViewMore buttonText='多视图缓存' variant='text'><MultiViewCache/></ViewMore>，让不同的用户看到不同的缓存
        </li>
        <li>业界一流的缓存一致性维护，无论基于Jimmer自身的能力还是整合已有数据库CDC技术方案，Jimmer都会在修改数据库后自动清理受影响的缓存数据并保证最终一致性。无需开发人员预测那些缓存数据会被影响，专注于修改数据库即可<CacheConsistency/></li>
      </ul>
    ),
  },
  {
    title: '便捷的功能',
    description: (
      <ul>
        <li>
          <p>对于REST服务而言，为客户端 <i>(比如Web前端)</i> 生成客户端代码 <i>(比如TypeScript)</i>。</p>
          <p>
            注意，和其他自动生成客户端代码的技术方案不同，服务端和客户端的编程模型不同。
            <ul>
              <li>服务端作为生产者，其编程模型经过了简化<i>(消除了DTO爆炸)</i>，大幅降低实现成本</li>
              <li>客户端作为消费者，采用完整的编程模型<i>(重现了DTO爆炸)</i>，使用起来具有良好的开发体验</li>
            </ul>
            这样，服务端和客户端都得到最适合自己的编程模型。<Communication/>
          </p>
        </li>
        <li>对于GraphQL服务而言，Jimmer允许开发人员用非常简单的方法去实现</li>
      </ul>
    ),
  },
  {
    title: '强类型SQL DSL',
    description: (
      <ul>
        <li>Jimmer的DSL并非是对SQL的机械翻译，其独创的`动态表连接`，填补<DynamicJoinProblem/>，无论多么复杂的动态查询都可以轻松书写</li>
        <li>支持混入Native SQL表达式，通用性SQL DSL和特定数据库的非标准功能并不冲突</li>
        <li>良好的代码安全性，编译时发现绝大部分问题，同时享受IDE智能提示支撑下的流畅开发体验</li>
      </ul>
    ),
  },
  {
    title: '良好的Spring支持',
    description: (
      <ul>
        <li>内置Spring Boot Starter支持，简化项目搭建</li>
        <li>支持Spring Data开发风格</li>
        <li>
          以Spring Cloud为代表的微服务技术体系可以和Jimmer实体之间的远程关联相结合。在微型服务体系中，数据库是碎片化的。先从不同的微服务中查询数据的不同部分，然后拼接起来作为一个整体返回，这个操作既繁琐又高频，应该由底层方案隐藏和自动化
        </li>
      </ul>
    ),
  },
  {
    title: '极致的性能',
    description: (
      <ul>
        <li>充分优化<code>ResultSet</code>映射性能，尽可能压缩除IO等待外的代码执行消耗。充分发挥Java21虚拟线程的潜力，支撑更高的吞吐<Performance/></li>
        <li>对分页查询进行特别的SQL优化</li>
      </ul>
    ),
  }
];

const FEATURE_LIST_EN: FeatureItem[] = [
  {
    title: 'Abstracting RDBMS into graph database',
    description: (
      <>
        By taking arbitrary data structures as the basic operation unit, 
        jimmer can even handle infinitely deep data structures with self-associated properties, 
        freeing developers from the hell of <ViewMore buttonText="DTO Explosion" variant="text"><DtoExplosion/></ViewMore>:
        <ul>
          <li>Query data structures of arbitrary shapes: Can be understood as GraphQLization of ORM<ObjectFetcher/></li>
          <li>Save data structures of arbitrary shapes: Quickly implement complex form submission business logic<SaveCommand/></li>
          <li>
            DTO language: 
            Even in some special scenarios where we cannot directly use the unified ORM entity and have to use DTO objects, 
            the development cost is only to define the shape of these DTOs using the DTO language. 
            Jimmer can automatically generate DTO definitions, transformations to/from entities, and even database interaction logic. 
            You won't feel the pain of DTO explosion caused by traditional technical solutions at all
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Powerful Cache Support',
    description: (
      <ul>
        <li>Whether to use cache is completely transparent to developers</li>
        <li>Developers decide which caching technologies to use</li>
        <li>
          Not only simple <ViewMore buttonText="Object Cache" variant="text"><ObjectCache/></ViewMore> is supported, 
          but also property-level cache, including 
          <ViewMore buttonText="Association Cache" variant="text"><AssociationCache/></ViewMore> and 
          <ViewMore buttonText="Calaculated Cache" variant="text"><CalculatedCache/></ViewMore>. 
          Ultimately providing caching capabilities for data structures of arbitrary shapes, not just simple objects.
        </li>
        <li>
          Technologies like permission systems often cause different users to see different data sets. 
          Therefore, Jimmer supports <ViewMore buttonText='Multiview cache' variant='text'><MultiViewCache/></ViewMore> to show different caches to different users.
        </li>
        <li>
          First-class cache consistency maintenance in the industry. 
          Whether based on Jimmer's own capabilities or integrating existing database CDC solutions, 
          Jimmer will automatically clear affected cache data and ensure eventual consistency after modifying the database. 
          Developers don't need to predict which cached data will be affected, just focus on modifying the database.
          <CacheConsistency/>
        </li>
      </ul>
    ),
  },
  {
    title: 'Convenient features',
    description: (
      <ul>
        <li>
          <p>For REST services, generate client code <i>(such as TypeScript)</i> for the client <i>(such as a web front end)</i>. </p>
           <p>
             Note that unlike other technical solutions that automatically generate client code, the programming model for the server and the client is different.
             <ul>
               <li>As the producer, the programming model of the server has been simplified <i>(eliminated DTO explosion)</i>, greatly reducing the implementation cost</li>
               <li>As a consumer, the client adopts a complete programming model <i>(reproduces the DTO explosion)</i>, and has a good development experience</li>
             </ul>
             In this way, both the server and the client get the most suitable programming model for themselves. <Communication/>
           </p>
          </li>
        <li>For GraphQL services, Jimmer allows developers to implement them in a very simple way</li>
      </ul>
    ),
  },
  {
    title: 'Strongly-typed SQL DSL',
    description: (
      <ul>
        <li>Jimmer's DSL is not a mechanical translation of SQL, its innovative `dynamic table join` fills an <DynamicJoinProblem/>, making it easy to write even the most complex dynamic queries</li>
        <li>Supports mixing native SQL expressions, generic SQL DSL and non-standard features of specificied databases are not conflict</li>
        <li>
          Good code safety, with the ability to detect the majority of issues at compile time, 
          while enjoying a smooth development experience supported by intelligent IDE suggestions
        </li>
      </ul>
    ),
  },
  {
    title: 'Good Spring support',
    description: (
      <ul>
        <li>Built-in Spring Boot Starter support, simplifying project setup</li>
        <li>Supports Spring Data development style</li>
        <li>
        The microservice technology system represented by Spring Cloud can be combined with the remote association between Jimmer entities. 
        In the microservice system, the database is fragmented. 
        First query different parts of the data from different microservices, and then stitch them together and return them as a whole, 
        this operation is cumbersome and high-frequency so should be hidden and automated by the underlying solution
        </li>
      </ul>
    ),
  },
  {
    title: 'Ultimate performance',
    description: (
      <ul>
        <li>
          Fully optimize the <code>ResultSet</code> mapping performance to compress the code execution consumption except IO waiting as much as possible. 
          Fully harnesses the potential of Java 21 virtual threads to support higher throughput
          <Performance/>
        </li>
        <li>
          Special SQL optimization for paging queries
        </li>
      </ul>
    ),
  }
];
