/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as LearnAritcleIdImport } from './routes/learn/$aritcleId'
import { Route as DatabaseModelIdImport } from './routes/database/$modelId'

// Create Virtual Routes

const ToolkitIndexLazyImport = createFileRoute('/toolkit/')()
const LoginIndexLazyImport = createFileRoute('/login/')()
const LearnIndexLazyImport = createFileRoute('/learn/')()
const DatabaseIndexLazyImport = createFileRoute('/database/')()
const ContributeIndexLazyImport = createFileRoute('/contribute/')()

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ToolkitIndexLazyRoute = ToolkitIndexLazyImport.update({
  id: '/toolkit/',
  path: '/toolkit/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/toolkit/index.lazy').then((d) => d.Route))

const LoginIndexLazyRoute = LoginIndexLazyImport.update({
  id: '/login/',
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login/index.lazy').then((d) => d.Route))

const LearnIndexLazyRoute = LearnIndexLazyImport.update({
  id: '/learn/',
  path: '/learn/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/learn/index.lazy').then((d) => d.Route))

const DatabaseIndexLazyRoute = DatabaseIndexLazyImport.update({
  id: '/database/',
  path: '/database/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/database/index.lazy').then((d) => d.Route),
)

const ContributeIndexLazyRoute = ContributeIndexLazyImport.update({
  id: '/contribute/',
  path: '/contribute/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/contribute/index.lazy').then((d) => d.Route),
)

const LearnAritcleIdRoute = LearnAritcleIdImport.update({
  id: '/learn/$aritcleId',
  path: '/learn/$aritcleId',
  getParentRoute: () => rootRoute,
} as any)

const DatabaseModelIdRoute = DatabaseModelIdImport.update({
  id: '/database/$modelId',
  path: '/database/$modelId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/database/$modelId': {
      id: '/database/$modelId'
      path: '/database/$modelId'
      fullPath: '/database/$modelId'
      preLoaderRoute: typeof DatabaseModelIdImport
      parentRoute: typeof rootRoute
    }
    '/learn/$aritcleId': {
      id: '/learn/$aritcleId'
      path: '/learn/$aritcleId'
      fullPath: '/learn/$aritcleId'
      preLoaderRoute: typeof LearnAritcleIdImport
      parentRoute: typeof rootRoute
    }
    '/contribute/': {
      id: '/contribute/'
      path: '/contribute'
      fullPath: '/contribute'
      preLoaderRoute: typeof ContributeIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/database/': {
      id: '/database/'
      path: '/database'
      fullPath: '/database'
      preLoaderRoute: typeof DatabaseIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/learn/': {
      id: '/learn/'
      path: '/learn'
      fullPath: '/learn'
      preLoaderRoute: typeof LearnIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/login/': {
      id: '/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/toolkit/': {
      id: '/toolkit/'
      path: '/toolkit'
      fullPath: '/toolkit'
      preLoaderRoute: typeof ToolkitIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/database/$modelId': typeof DatabaseModelIdRoute
  '/learn/$aritcleId': typeof LearnAritcleIdRoute
  '/contribute': typeof ContributeIndexLazyRoute
  '/database': typeof DatabaseIndexLazyRoute
  '/learn': typeof LearnIndexLazyRoute
  '/login': typeof LoginIndexLazyRoute
  '/toolkit': typeof ToolkitIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/database/$modelId': typeof DatabaseModelIdRoute
  '/learn/$aritcleId': typeof LearnAritcleIdRoute
  '/contribute': typeof ContributeIndexLazyRoute
  '/database': typeof DatabaseIndexLazyRoute
  '/learn': typeof LearnIndexLazyRoute
  '/login': typeof LoginIndexLazyRoute
  '/toolkit': typeof ToolkitIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/database/$modelId': typeof DatabaseModelIdRoute
  '/learn/$aritcleId': typeof LearnAritcleIdRoute
  '/contribute/': typeof ContributeIndexLazyRoute
  '/database/': typeof DatabaseIndexLazyRoute
  '/learn/': typeof LearnIndexLazyRoute
  '/login/': typeof LoginIndexLazyRoute
  '/toolkit/': typeof ToolkitIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/database/$modelId'
    | '/learn/$aritcleId'
    | '/contribute'
    | '/database'
    | '/learn'
    | '/login'
    | '/toolkit'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/database/$modelId'
    | '/learn/$aritcleId'
    | '/contribute'
    | '/database'
    | '/learn'
    | '/login'
    | '/toolkit'
  id:
    | '__root__'
    | '/'
    | '/database/$modelId'
    | '/learn/$aritcleId'
    | '/contribute/'
    | '/database/'
    | '/learn/'
    | '/login/'
    | '/toolkit/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DatabaseModelIdRoute: typeof DatabaseModelIdRoute
  LearnAritcleIdRoute: typeof LearnAritcleIdRoute
  ContributeIndexLazyRoute: typeof ContributeIndexLazyRoute
  DatabaseIndexLazyRoute: typeof DatabaseIndexLazyRoute
  LearnIndexLazyRoute: typeof LearnIndexLazyRoute
  LoginIndexLazyRoute: typeof LoginIndexLazyRoute
  ToolkitIndexLazyRoute: typeof ToolkitIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DatabaseModelIdRoute: DatabaseModelIdRoute,
  LearnAritcleIdRoute: LearnAritcleIdRoute,
  ContributeIndexLazyRoute: ContributeIndexLazyRoute,
  DatabaseIndexLazyRoute: DatabaseIndexLazyRoute,
  LearnIndexLazyRoute: LearnIndexLazyRoute,
  LoginIndexLazyRoute: LoginIndexLazyRoute,
  ToolkitIndexLazyRoute: ToolkitIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/database/$modelId",
        "/learn/$aritcleId",
        "/contribute/",
        "/database/",
        "/learn/",
        "/login/",
        "/toolkit/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/database/$modelId": {
      "filePath": "database/$modelId.tsx"
    },
    "/learn/$aritcleId": {
      "filePath": "learn/$aritcleId.tsx"
    },
    "/contribute/": {
      "filePath": "contribute/index.lazy.tsx"
    },
    "/database/": {
      "filePath": "database/index.lazy.tsx"
    },
    "/learn/": {
      "filePath": "learn/index.lazy.tsx"
    },
    "/login/": {
      "filePath": "login/index.lazy.tsx"
    },
    "/toolkit/": {
      "filePath": "toolkit/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
