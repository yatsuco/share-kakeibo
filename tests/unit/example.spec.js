import { shallowMount } from "@vue/test-utils";
import InputInfo from "@/components/InputInfo.vue";

describe("InputInfo.vue", () => {
  it("仮テスト", () => {
    const wrapper = shallowMount(InputInfo, {});
    expect(wrapper.text()).toMatch("");
  });
});
