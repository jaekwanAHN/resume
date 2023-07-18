import Link from 'next/link';

const Contact = () => {
  return (
    <div className="contactContainer">
      <p>P.H: 010-8003-365</p>
      <p>EMail: ggstork@gmail.com</p> {/*이메일 보내기 링크도 추가하기 */}
      <p>
        GitHub:{' '}
        <Link href="https://github.com/jaekwanAHN">
          https://github.com/jaekwanAHN
        </Link>
      </p>
      <p>
        Blog:{' '}
        <Link href="https://jaekwan.tistory.com/">
          https://jaekwan.tistory.com/
        </Link>
      </p>
    </div>
  );
};

export default Contact;
