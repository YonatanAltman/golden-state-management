export enum Position {
  pointGuard = 'PointGuard',
  shootingGuard = 'ShootingGuard',
  smallForward = 'SmallForward',
  powerForward = 'PowerForward',
  center = 'Center'
}

export interface BaseTeamMember {
  firstName: string;
  lastName: string;
  age: number;
  salary: number;
}

export interface Player extends BaseTeamMember {
  position: Position;
  shirtNum:string,
  collage?: string;
}
