export const home = (req, res) => res.render("Home")


export const search = (req, res) => {
    const {query:{term : searchingBy}} = req;
       res.render("Search", {searchingBy: searchingBy})
}

export const images = (req, res) => res.render("images")


export const upload = (req, res) => res.render("upload")


export const imageDetail = (req, res) => res.render("Image Detail")


export const editImage = (req, res) => res.render("Edit Imgae")


export const deleteImage = (req, res) => res.render("Delete Imgae")