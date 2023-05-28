import {
  Routes as RoutesReactRouterDOM,
  Route,
  Navigate,
} from 'react-router-dom';
import { Converter } from '../pages';

function Routes() {
  return (
    <RoutesReactRouterDOM>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Converter />} />
    </RoutesReactRouterDOM>
  );
}

export default Routes;
