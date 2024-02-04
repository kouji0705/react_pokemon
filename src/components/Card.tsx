interface CardProps {
  id: number;
  name: string;
  image: string;
}

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
