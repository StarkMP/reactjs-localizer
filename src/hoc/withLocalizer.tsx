import React from 'react';

import { useLocalizer } from '../context/LocalizerContext';
import { ContextProps } from '../types';

export const withLocalizer = <T extends {}>(
  WrappedComponent: React.ComponentType<T & ContextProps>
): React.FC<T & Partial<ContextProps>> => {
  const ComponentWithLocalizer: React.FC<T> = (props) => {
    const localizerProps = useLocalizer();

    return <WrappedComponent {...props} {...localizerProps} />;
  };

  return ComponentWithLocalizer;
};
