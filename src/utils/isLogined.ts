const isLogined: () => boolean = () => !!sessionStorage.getItem('access_token');

export default isLogined;