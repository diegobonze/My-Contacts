import ReactDOM from 'react-dom';

import { OverLay } from './styles';

export function Loader() {
  return ReactDOM.createPortal(
    <OverLay>
      <div className="loader" />
    </OverLay>,
    document.getElementById('loader-root'),
  );
}
