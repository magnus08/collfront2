import React from 'react';
import Link from 'next/link';
import {CollLayout} from '../components/CollLayout';

const Index = () => (
  <div>
    <CollLayout>
      <p>Hello Next.js</p>
      <Link href="/about"><a>About</a></Link>
    </CollLayout>
  </div>
);

export default Index;
