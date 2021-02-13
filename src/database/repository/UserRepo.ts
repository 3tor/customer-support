import User, { UserModel } from '../model/User';
import Role, { RoleModel } from '../model/Role';
// import { InternalError } from '../../util/error';

export default class UserRepo {
 
  public static findByEmail(email: string): Promise<User | null> {
    return UserModel.findOne({ email: email, status: true })
      .select('+email +password +roles')
      .populate({
        path: 'roles',
        match: { status: true },
        select: { code: 1 },
      })
      .lean<User>()
      .exec();
  }

   public static async create(
    user: User,
    roleCode: string,
  ) {
    const now = new Date();
    console.log("role code", roleCode);
    const role = await RoleModel.findOne({ code: roleCode })
      .select('+email +password')
      .lean<Role>()
      .exec();
    // if (!role) throw new InternalError('Role must be defined');
    if(!role) {
      return {
        error: 'Role must be defined'
      };
    }

    user.roles = [role._id];
    user.createdAt = user.updatedAt = now;
    const createdUser = await UserModel.create(user);
    return { new_user: createdUser };
  }
}
