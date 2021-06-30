import { makeStyles } from '@material-ui/core';

export const memberHomeStyle = makeStyles({
  memberWrapper: {
    width: '100%',
    minWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    margin: 0
  },
  components: {
    width: 'calc(100% - 210px)',
    padding: 10
  },
});
