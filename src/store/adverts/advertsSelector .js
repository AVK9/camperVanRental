import { createSelector } from '@reduxjs/toolkit';

export const selectStateAdverts = (state) => state.adverts.adverts;
export const selectFilter = (state) => state.filter.filter;
export const selectType = (state) => state.filter.type;
export const selectEquipment = (state) => state.filter.equipment;
export const selectLoading = (state) => state.adverts.isLoading;
export const selectError = (state) => state.adverts.error;

export const selectVisibleAdverts = createSelector(
  [selectStateAdverts, selectFilter],
  (adverts, filter) => {
    return filter.length > 0
      ? adverts.filter((advert) =>
          advert.location.toLowerCase().includes(filter.toLowerCase())
        )
      : adverts;
  }
);

export const selectVisibleVehicleType = createSelector(
  [selectVisibleAdverts, selectType],
  (adverts, filter) => {
    return filter.length > 0
      ? adverts.filter((advert) => advert.form.includes(filter))
      : adverts;
  }
);

// export const selectVisibleVehicleEquipment = createSelector(
//   [selectVisibleVehicleType, selectEquipment],
//   (adverts, filter) => {
//     return filter.length > 0
//       ? adverts.filter((advert) =>
//           selectEquipment.every(
//             (equipment) =>
//               advert.details.airConditioner === equipment ||
//               advert.details.kitchen === equipment ||
//               advert.details.shower === equipment ||
//               advert.details.transmission === equipment ||
//               advert.details.petrol === equipment
//           )
//         )
//       : adverts;
//   }
// );
// export const selectVisibleVehicleEquipment = createSelector(
//   [selectVisibleVehicleType, selectEquipment],
//   (adverts, equipment) => {
//     return equipment.length > 0
//       ? adverts.filter((advert) =>
//           equipment.every(
//             (item) =>
//               advert.details.hasOwnProperty(item) && advert.details[item] <= 1
//           )
//         )
//       : adverts;
//   }
// );
