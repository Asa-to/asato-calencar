# このnoteについて
一回使ったきりの技術についてすぐ忘れちゃうので、ここにしっかりメモを残しておくことにしました。npmとか同じページ二回も三回も見てるの本当にあほらしい。
# ライブラリ～ズ
## react-router
ルーティングを実現するためのライブラリ。\
exact で完全一致。react-router-domから基本全部ロードできると思われる。
### react-router-dom
ドムをreact-routerに結びつけるためのモノってnpmに書いてある。react-routerより上位のコンポーネントでBrouserRouterでラップするのが正しい使い方のはずだ。
```JavaScript
import { BrowserRouter, Switch, Route } from 'react-router-dom';

<BrowserRouter>
  <Switch>
    <Route exace path='/'>
      <Component />
    </Route>
    <Route path='*' />
      <Component />
    </Route>
  </Switch>
</BrowserRouter>
```