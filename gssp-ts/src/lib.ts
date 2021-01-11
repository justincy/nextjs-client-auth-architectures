import { GetServerSideProps, GetServerSidePropsContext } from 'next'

function hasAuth(context: GetServerSidePropsContext) {
  return !!context.req.cookies?.session;
}

export const withAuth: GetServerSideProps = async (context) => {
  // If authenticated, return empty props.
  if (hasAuth(context)) {
    return {props: {}};
  }

  // If not authenticated, redirect.
  return {
    redirect: {
      permanent: false,
      destination: '/login'
    }
  }
}

export const withoutAuth: GetServerSideProps = async (context) => {
  // If authenticated, return empty props.
  if (!hasAuth(context)) {
    return {props: {}};
  }

  // If not authenticated, redirect.
  return {
    redirect: {
      permanent: false,
      destination: '/profile'
    }
  }
}