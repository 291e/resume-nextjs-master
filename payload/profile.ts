import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import image from '../asset/profile.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '이규원',
    small: '(Kyuwon Lee)',
  },
  contact: [
    {
      title: 'yko0321@naver.com',
      link: 'mailto:yko0321@naver.com',
      icon: faEnvelope,
    },
    {
      title: '010-9478-2790',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/291e?tab=repositories',
      icon: faGithub,
    },
  ],
  // notice: {
  //   title: '휴대전화나 이메일로 연락 부탁드립니다.',
  //   icon: faBell,
  // },
};

export default profile;
