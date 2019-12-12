import { Component, Emit, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";
import { isUndefined } from "lodash";

@Component
export default class UpdateRouteCheckMixin extends Vue {
  private created() {
    this.updateBeforeRoute();
  }

  @Emit()
  public updateBeforeRoute() {}
  @Watch("$route", { immediate: true, deep: true })
  private watchRouter(to: Route, from: Route) {
    if (!isUndefined(from)) {
      this.updateBeforeRoute();
    }
  }
}
