// controllers/socialController.js
module.exports.redirectToSocial = (req, res) => {
  const platform = req.params.platform;
  const profiles = {
    linkedin: "https://www.linkedin.com/in/akashdeep-ku789/",
    github: "https://github.com/akashdeep789-proj",
    instagram: "https://www.instagram.com/akashdeep_7781/",
  };

  const redirectUrl = profiles[platform];
  if (redirectUrl) {
    return res.redirect(redirectUrl);
  } else {
    return res.status(404).send("Platform not found");
  }
};
