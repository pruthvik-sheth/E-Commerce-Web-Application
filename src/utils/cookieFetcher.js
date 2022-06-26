import cookie from 'cookie';

const cookieFetcher = () => {
    return cookie.parse(document.cookie);
};

export default cookieFetcher;