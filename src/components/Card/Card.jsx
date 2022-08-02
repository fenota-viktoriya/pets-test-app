import { Image } from 'components/Image/Image';

const phoneImg = new URL('../images/phone.jpg', import.meta.url);

export function Card() {
  return <Image src={phoneImg} alt="phone" />;
}
