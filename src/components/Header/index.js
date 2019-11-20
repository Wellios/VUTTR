import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Container, Actions, Inputs } from './styles';
import { IconButton } from '../IconButton';
import { SearchInput } from '../SearchInput';
import { CheckboxInput } from '../CheckboxInput';
import { searchToolsRequest } from '../../store/modules/tools/actions';

export const Header = ({ onClick, value }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const handleSearch = text => {
    dispatch(searchToolsRequest(text, checked));
  };

  return (
    <Container>
      <h1>VUTTR</h1>
      <h3>Very Useful Tools to Remember</h3>
      <Actions>
        <Inputs>
          <SearchInput
            value={value}
            onChange={e => handleSearch(e.target.value)}
          />
          <CheckboxInput
            checked={checked}
            onChecked={() => setChecked(!checked)}
          />
        </Inputs>
        <IconButton
          onClick={onClick}
          color="#365df0"
          icon={<FaPlus color="#FFF" size={13} />}
        >
          Add
        </IconButton>
      </Actions>
    </Container>
  );
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
