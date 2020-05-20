
import Page from '../../common/page';

Page({
  data: {
    active: 0
  },

  onSwitch(event) {
    this.setData({
      active: event.detail.index
    });
  }
});
