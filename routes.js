

//Global

const HOME = '/';
const JOIN = '/join';
const LOGIN = '/login';
const LOGOUT = '/logout';
const SEARCH = '/search';


//Users

const USERS = '/users';
const USER_DETAIL = '/:id/';
const EDIT_PROFILE = '/edit-profile';
const CHANGE_PASSWORD = '/change-password';


//Image

const IMAGES = '/imgaes';
const UPLOAD = '/upload';
const IMAGE_DETAIL = '/:id';
const EDIT_IMAGE = '/:id/edit';
const DELETE_IMAGE = '/:id/delete';


const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    images: IMAGES,
    upload: UPLOAD,
    imageDetail: IMAGE_DETAIL,
    editImage: EDIT_IMAGE,
    deleteImage: DELETE_IMAGE
};

export default routes;