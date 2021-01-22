import React, { useEffect, memo } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, RootStore } from '../../../store/store';
import getStyles from '../../../actions/relatedProducts/getStyles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { getProduct } from '../../../actions/singleProductAction';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.main,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }),
);

const NO_IMAGE_URL = 'https://www.nicopress.com/media/images/800/0/404-not-found.png';

export const SingleLineGridList = memo(() => {
  const dispatch = useDispatch();
  const productId = useSelector((state: RootStore) => state.singleProduct.products.id);
  const relatedProducts = useSelector((state: RootState) => state.relatedReducer.relatedProducts);

  const classes = useStyles();

  useEffect(() => {
    if (productId) {
      dispatch(getStyles(productId));
    }
  }, [productId, dispatch]);

  const fetchProduct = (prod_id: number) => () => {
    dispatch(getProduct(prod_id));
  };

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {relatedProducts.map((prod) => (
          <GridListTile key={prod.id} onClick={fetchProduct(prod.id)}>
            <img src={prod.picture.photos[0].thumbnail_url ? prod.picture.photos[0].thumbnail_url : NO_IMAGE_URL} alt="" />
            <GridListTileBar
              title={prod.name}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${prod.name}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
});

export default SingleLineGridList;
