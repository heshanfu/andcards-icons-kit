import React from 'react';
import createAndCardsIcon from './create-andcards-icon';

export default createAndCardsIcon(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M254,65.51c0.666,-0.007 1.333,-0.01 2,-0.01c105.14,0 190.5,85.36 190.5,190.5c0,105.14 -85.36,190.5 -190.5,190.5c-105.14,0 -190.5,-85.36 -190.5,-190.5c0,-104.138 84.741,-188.884 188.5,-190.49l0,25.002c-89.96,1.602 -163.5,75.148 -163.5,165.488c0,91.342 74.158,165.5 165.5,165.5c91.342,0 165.5,-74.158 165.5,-165.5c0,-91.342 -74.158,-165.5 -165.5,-165.5c-0.668,0 -1.334,0.004 -2,0.012l0,-25.002Z"
      />
      <Shape
        d="M224.811,294.413l94.909,-94.909c4.878,-4.878 12.799,-4.878 17.676,0c4.878,4.878 4.878,12.798 0,17.676l-103.698,103.698c-2.451,2.451 -5.671,3.671 -8.887,3.658c-3.216,0.013 -6.436,-1.207 -8.887,-3.658l-41.32,-41.32c-4.878,-4.878 -4.878,-12.798 0,-17.676c4.877,-4.878 12.798,-4.878 17.676,0l32.531,32.531Z"
      />
    </Group>
  )
);