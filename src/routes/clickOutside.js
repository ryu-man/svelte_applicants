/** Dispatch event on click outside of node */
export function clickOutsideAction(node, callback = () => { }) {

  const handleClick = event => {
    if (!node.contains(event.target) && !event.defaultPrevented) {
      // node.dispatchEvent(
      //   new CustomEvent('click-outside', node)
      // )

      callback()
    }
  }

  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
  }
}
