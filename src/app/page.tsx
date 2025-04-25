import { Metadata } from 'next';
import HomepageContent from './HomepageContent';

export const metadata: Metadata = {
  title: 'AMANITA | Artesanía en Barro de Yucatán',
  description:
    'Descubre nuestra colección de ollas de barro artesanales hechas en Yucatán, México.',
};

export default function Home() {
  return <HomepageContent />;
}
