import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "FLOSS by design",
    Svg: require("@site/static/img/oss.svg").default,
    description: (
      <>
        Ocean Apocalypse is a small FLOSS-first organization. We create and
        maintain libraries and software, but also games.
      </>
    ),
  },
  {
    title: "Powerful but not complex",
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        At Ocean Apocalypse, we do not believe in "minimalist" or "opinionated"
        software, as we prefer to make powerful and versatile projects.
      </>
    ),
  },
  {
    title: "EU-based",
    Svg: require("@site/static/img/eu.svg").default,
    description: (
      <>
        Our software is EU-based, meaning you are not subject to laws such as
        USA's CLOUD Act. It's a privacy bonus.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
