import { CardProps } from '../types/card';

export const Card: React.FC<CardProps> = ({ id, name, image }) => {
  return (
    <div className="card">
      <div className="card-id">#{id}</div>
      <div className="card-name">{name}</div>
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
    </div>
  );
};
