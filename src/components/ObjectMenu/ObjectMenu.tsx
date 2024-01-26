import { useState } from 'react';
import { LabelMenu } from './LabelMenu';
import { FacesMenu } from './FacesMenu';
import { TimeSpansApi } from '../../types';
import {
  MenuOption,
  ObjectMenuSelector,
  ObjectMenuStyled,
} from './ObjectMenu.styled';

enum ObjectMenuOption {
  labels = 'Labels',
  faces = 'Faces',
}

export const ObjectMenu = ({
  onSetTimespans,
}: {
  onSetTimespans: (timespans: TimeSpansApi) => void;
}) => {
  const [currentMenuOption, setCurrentMenuOptionOption] = useState(
    ObjectMenuOption.labels,
  );

  return (
    <ObjectMenuStyled>
      <ObjectMenuSelector>
        {Object.entries(ObjectMenuOption).map(([key, menuOption]) => (
          <MenuOption
            key={key}
            selected={currentMenuOption === menuOption}
            onClick={() => setCurrentMenuOptionOption(menuOption)}
          >
            {menuOption}
          </MenuOption>
        ))}
      </ObjectMenuSelector>
      {currentMenuOption === ObjectMenuOption.faces && (
        <FacesMenu onClick={onSetTimespans} />
      )}
      {currentMenuOption === ObjectMenuOption.labels && (
        <LabelMenu onClick={onSetTimespans} />
      )}
    </ObjectMenuStyled>
  );
};
