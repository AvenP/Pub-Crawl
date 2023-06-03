const withAuth = (req, res, next) => {
    // redirect user to login page if he is not logged in.

    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      
      // if user is logged in, execute function to allow him view the page.
      // call function next() if user is authenticated

      next();
    }
  };
  
  module.exports = withAuth;