import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/toolkit/')({
  component: Toolkit,
})

function Toolkit() {
  return <div>Hello "/toolkit/"!</div>
}
