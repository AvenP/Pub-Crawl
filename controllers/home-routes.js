const router = require('express').Router();
const { Post, Comment, User, Pub } = require('../models/');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    
    const postData = await Post.findAll({
      include: [User],
    });
    
    const posts = postData.map((post) => post.get({ plain: true }));
    
    res.render('all-posts-admin', { posts, loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/post/:id', withAuth, async (req, res) => {
  try {

    const postData = await Post.findOne({
      
      where: {id: req.params.id},
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      
      const post = postData.get({ plain: true });
      
      console.log(post);
      res.render('single-post', { post, loggedIn: req.session.loggedIn});
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////START

//                                                         // GET all Breweries for homepage
// router.get('/', async (req, res) => {
//   try {
//     const dbPubData = await Pub.findAll({
//       include: [
//         {
//           model: Painting,
//           attributes: ['filename', 'description'],
//         },
//       ],
//     });

//     const galleries = dbGalleryData.map((gallery) =>
//       gallery.get({ plain: true })
//     );

//     res.render('homepage', {
//       galleries,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

//                                                                            // GET one City Breweries
// router.get('/gallery/:id', async (req, res) => {
//   try {
//     const dbGalleryData = await Gallery.findByPk(req.params.id, {
//       include: [
//         {
//           model: Painting,
//           attributes: [
//             'id',
//             'title',
//             'artist',
//             'exhibition_date',
//             'filename',
//             'description',
//           ],
//         },
//       ],
//     });

//     const gallery = dbGalleryData.get({ plain: true });
//     res.render('gallery', { gallery });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

//                                                                                // GET one Brewery
// router.get('/painting/:id', async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });

//     res.render('brewery', { brewery });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

//                                                                                       // GET your Crawl
// router.get('/painting/:id', async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });

//     res.render('brewery', { brewery });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////END




module.exports = router;