// import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// const JAN_1ST_2030 = 1893456000;
// const ONE_GWEI: bigint = 1_000_000_000n;

// const LockModule = buildModule("LockModule", (m) => {
//   // Since Create does not take any parameters, these can be removed or repurposed
//   // const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
//   const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

//   const create = m.contract("Create", [], {  // No arguments are passed here
//     value: lockedAmount,
//   });

//   return { create };
// });

// export default LockModule;
