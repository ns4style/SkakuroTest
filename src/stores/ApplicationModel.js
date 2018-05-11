import {decorate, observable, action} from "mobx";

class ApplicationModel {

  showLoading;

  constructor() {
    this.showLoading = true;
  }

  @action
  resetShowLoading() {
    this.showLoading = false;
  }

  @action
  setShowLoading() {
    this.showLoading = true;
  }
}

decorate(ApplicationModel, {
  showLoading: observable,
  resetShowLoading: action,
  setShowLoading: action
});

const AppModel = new ApplicationModel();
export default AppModel;
