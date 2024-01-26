import { useState } from 'react';
import { Label } from '../Label';
import { LabelApi, TimeSpansApi } from '../../../types';
import { LabelMenuStyled } from './LabelMenu.styled';
import { useGetLabelsQuery } from '../../../queries/getLabels.query';

export const LabelMenu = ({
  onClick,
}: {
  onClick: (timespans: TimeSpansApi) => void;
}) => {
  const { data: labels } = useGetLabelsQuery();
  const [selectedLabel, selectLabel] = useState<LabelApi>();

  return (
    <LabelMenuStyled>
      {(labels ?? []).map((label) => (
        <Label
          key={label.Name}
          name={label.Name}
          selected={label.Name === selectedLabel?.Name}
          onClick={() => {
            selectLabel(label);
            onClick(label.TimeSpans);
          }}
        />
      ))}
    </LabelMenuStyled>
  );
};
