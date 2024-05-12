import type { NextPage } from 'next';

import HomeContainer from 'containers/home';

type Props = {
  isMobile: boolean;
};
const Home: NextPage<Props> = (props) => {
  return <HomeContainer {...props} />;
};

Home.getInitialProps = async ({ req }) => {
  let userAgent;
  if (req) {
    // if you are on the server and you get a 'req' property from your context
    userAgent = req.headers['user-agent']; // get the user-agent from the headers
  } else {
    userAgent = navigator.userAgent; // if you are on the client you can access the navigator from the window object
  }
  const isMobile = Boolean(
    userAgent?.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
  return { isMobile };
};

export default Home;
