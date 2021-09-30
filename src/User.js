import withUser from "./withUser";

const User = ({ user }) => (
  <div>
    <strong>
      #{user.id} | {user.name} ({user.username})
    </strong>
    <br />
    <span>{}</span>
  </div>
);

export default withUser(User);
