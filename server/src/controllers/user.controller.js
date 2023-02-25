const User = require("../models/user.model");
const {
  USER_ROLE,
  SELECTED_USER_FIELDS,
} = require("../constants/user.constants");
const userService = require("../services/user.service");

const Connect = require("../models/connect.model");
const {
  NotFoundError,
  BadRequestError,
  ServerErrror,
  UnauthorizeError,
} = require("../errors/Errors");

exports.getAllUsersByRole = async (req, res, next) => {
  const userRole = await userService.getUserRoleById(req?.userId);
  const is_admin = await userService.isAdmin(req?.userId);

  let filterRoleByFetcherRole;

  if (is_admin) {
    filterRoleByFetcherRole = {};
  } else {
    filterRoleByFetcherRole = {
      role:
        userRole === USER_ROLE.ENTREPRENEUR
          ? USER_ROLE.CONSULTANT
          : USER_ROLE.ENTREPRENEUR,
    };
  }

  const users = await User.find(filterRoleByFetcherRole).select(
    SELECTED_USER_FIELDS
  );
  const connectionKeyByRole =
    userRole === USER_ROLE.ENTREPRENEUR ? "entrepreneurId" : "consultantId";
  const connectionKeyToAddConnect =
    connectionKeyByRole === "entrepreneurId"
      ? "consultantId"
      : "entrepreneurId";

  const connections = await Connect.find({
    [connectionKeyByRole]: req.userId,
  });

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const connect = connections.find(
      (c) => c[connectionKeyToAddConnect] == user._id.toString()
    );
    if (connect) {
      users[i] = { ...user._doc, connect };
    }
  }

  res.status(200).send(users);
};

exports.getOneUserById = async (req, res, next) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  if (!user) return next(new NotFoundError());
  res.send(user);
};

exports.deleteOneUserById = async (req, res, next) => {
  const { userId } = req.params;
  const userLoggedIn = await User.findById(req.userId);

  if (userLoggedIn.role === USER_ROLE.ADMIN) {
    if (!userId) return next(new BadRequestError());

    if (userId === userLoggedIn._id) {
      return new BadRequestError("Cannot Delete the user you are logged with.");
    }

    const deletedUser = await User.findByIdAndDelete(userId);
    res
      .status(202)
      .send({ error: false, message: `User:${deletedUser.email} Deleted.` });
  } else {
    return next(new UnauthorizeError());
  }
};

exports.putUpdateInformationInUser = async (req, res, next) => {
  try {
    const connectUser = await User.findById(req.userId);
    const updateUser = req.body;

    const result = await User.findByIdAndUpdate(connectUser, updateUser, {
      new: true,
    });

    console.log(connectUser);
    console.log(updateUser);
    console.log(result);

    res.status(result);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getListOfCountriesFromUsers = async (req, res, next) => {
  try {
    const countries = await User.aggregate([
      {
        $group: {
          _id: "$location.country",
        },
      },
      {
        $match: {
          _id: { $ne: null },
        },
      },
      {
        $project: {
          _id: 0,
          country: "$_id",
        },
      },
    ]).allowDiskUse(true);

    res.status(200).send(countries.map((country) => country.country));
  } catch (error) {
    console.error(error);
    next(new NotFoundError());
  }
};

exports.getListOfExpertisesFromUsers = async (req, res, next) => {
  const expertises = await User.aggregate([
    {
      $group: {
        _id: "$expertise",
      },
    },
  ]).allowDiskUse(true);

  const listOfExpertises = expertises.map((expertise) => {
    return expertise._id.toString();
  });

  res.status(200).send(listOfExpertises);
};
