import icons from '../../node_modules//@vant/icons/src/config';
import Page from '../../common/page';

Page({
  data: {
    icons,
    active: 0
  },

  onSwitch(event) {
    this.setData({
      active: event.detail.index
    });
  }
});
