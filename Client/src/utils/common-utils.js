export const getAccessTocken = () => {
    return sessionStorage.getItem('accessToken');
} 

export const getUserName = () => {
    const accessToken =  getAccessTocken();
    const userName = JSON.parse(atob(accessToken.split(' ')[1].split('.')[1])).username;
    return userName;
}