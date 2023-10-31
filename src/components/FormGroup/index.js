import PropsTypes from 'prop-types';

import { Container } from './styles';

export function FormGroup({ children, error }) {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
}

FormGroup.propTypes = {
  children: PropsTypes.node.isRequired,
  error: PropsTypes.string,
};

FormGroup.defaultProps = {
  error: null,
};
