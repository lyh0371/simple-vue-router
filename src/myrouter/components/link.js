function isActive(location) {
  return window.location.hash.slice(1) === location;
}

export default {
  functional: true,
  render(h, { props, slots }) {
    const active = isActive(props.to) ? "my-vue-router-active" : "";
    console.log("active", active);
    return h(
      "a",
      {
        attrs: {
          href: `#${props.to}`,
          class: [`${active}`],
        },
      },
      slots().default[0].text
    );
  },
};
