// Per-player 3-season history (2023-2025) with a per-season weekly points log, shown
// in the detail popup only (not the at-a-glance views). `ppg` at the top level mirrors
// the 2025 season for quick access (used by the compact PPG badge everywhere else).
export interface SeasonLine {
  year: number;
  ppg: number;
  gamesPlayed: number;
  gamesMissed: number;
  missedReason: string | null;
  weekly: number[];
}

export interface PlayerStats {
  ppg: number;
  seasons: SeasonLine[];
}

export const PLAYER_STATS: Record<string, PlayerStats> = {
  "josh-allen-qb": {
    ppg: 26.0,
    seasons: [
      { year: 2023, ppg: 24.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [29.0, 17.1, 15.6, 19.0, 12.9, 17.9, 22.6, 44.6, 32.7, 33.3, 43.3, 14.0, 20.4, 17.5, 27.6, 28.1, 20.9] },
      { year: 2024, ppg: 25.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [11.5, 27.5, 23.0, 38.1, 31.4, 23.0, 18.9, 30.2, 11.8, 34.3, 32.7, 38.1, 23.9, 29.5, 14.4, 18.5, 31.8] },
      { year: 2025, ppg: 26.0, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, Week 9", weekly: [28.5, 19.2, 31.4, 24.8, 22.1, 33.6, 18.9, 27.3, 25.0, 29.8, 15.6, 34.2, 23.4, 26.9, 21.5, 34.0] },
    ],
  },
  "lamar-jackson-qb": {
    ppg: 22.9,
    seasons: [
      { year: 2023, ppg: 23.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Quad strain, Week 14", weekly: [14.8, 22.0, 37.7, 23.6, 20.4, 28.8, 28.0, 25.8, 26.8, 18.8, 23.1, 15.0, 27.4, 22.1, 25.7, 20.8] },
      { year: 2024, ppg: 25.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [32.7, 34.2, 23.5, 32.5, 16.6, 38.1, 21.9, 19.6, 24.1, 22.0, 20.6, 21.9, 18.4, 21.9, 18.5, 33.2, 33.8] },
      { year: 2025, ppg: 22.9, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, Weeks 6-7", weekly: [26.4, 15.8, 29.1, 20.5, 18.9, 31.2, 24.6, 12.3, 27.8, 19.4, 33.5, 21.0, 16.7, 28.9, 24.5] },
    ],
  },
  "drake-maye-qb": {
    ppg: 20.8,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 15.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Concussion protocol, Week 11", weekly: [14.1, 8.9, 11.4, 22.8, 16.6, 14.1, 13.4, 11.2, 24.0, 21.6, 8.8, 14.5, 17.5, 13.0, 21.0, 19.9] },
      { year: 2025, ppg: 20.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [24.5, 15.2, 28.9, 18.6, 12.4, 26.1, 21.8, 17.5, 30.2, 19.9, 14.3, 25.6, 22.0, 16.8, 29.4, 20.1, 13.8] },
    ],
  },
  "joe-burrow-qb": {
    ppg: 21.9,
    seasons: [
      { year: 2023, ppg: 14.2, gamesPlayed: 10, gamesMissed: 7, missedReason: "Wrist injury, season-ending surgery, Week 11", weekly: [16.8, 11.3, 15.4, 13.4, 16.2, 18.1, 17.3, 8.2, 11.0, 14.3] },
      { year: 2024, ppg: 22.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [24.2, 15.3, 26.8, 27.7, 28.6, 21.2, 9.8, 18.9, 18.9, 13.7, 18.1, 29.2, 22.7, 32.5, 14.6, 23.6, 41.8] },
      { year: 2025, ppg: 21.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Calf strain, Week 8", weekly: [25.6, 16.8, 29.4, 18.2, 24.0, 14.5, 30.1, 20.7, 26.3, 17.9, 22.5, 32.0, 15.3, 23.8, 19.6, 27.0] },
    ],
  },
  "jayden-daniels-qb": {
    ppg: 22.4,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 19.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [17.2, 13.9, 20.0, 17.9, 16.3, 21.9, 18.5, 16.9, 22.0, 18.7, 25.3, 25.7, 19.7, 11.2, 21.8, 21.1, 23.4] },
      { year: 2025, ppg: 22.4, gamesPlayed: 16, gamesMissed: 1, missedReason: "Rib injury, Week 12", weekly: [26.0, 17.5, 29.8, 20.2, 15.6, 31.4, 23.0, 18.8, 27.2, 21.5, 33.0, 16.9, 24.6, 19.0, 30.5, 22.1] },
    ],
  },
  "jalen-hurts-qb": {
    ppg: 18.2,
    seasons: [
      { year: 2023, ppg: 18.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [21.1, 32.9, 34.1, 18.7, 5.6, 6.6, 15.0, 22.1, 17.1, 11.7, 17.1, 23.7, 24.0, 15.9, 23.2, 20.8, 11.7] },
      { year: 2024, ppg: 16.5, gamesPlayed: 14, gamesMissed: 3, missedReason: "Concussion and knee, Weeks 9-11", weekly: [14.3, 9.5, 11.8, 23.7, 17.2, 22.7, 11.1, 9.7, 17.9, 19.2, 24.3, 23.0, 12.6, 14.0] },
      { year: 2025, ppg: 18.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [22.1, 14.5, 25.6, 16.8, 12.3, 20.9, 17.4, 24.0, 15.2, 19.6, 10.8, 26.3, 18.0, 13.9, 21.5, 17.7, 23.4] },
    ],
  },
  "caleb-williams-qb": {
    ppg: 17.6,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 13.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [12.0, 12.2, 8.5, 15.0, 10.1, 20.0, 22.5, 11.5, 8.9, 5.6, 17.9, 15.8, 11.0, 16.6, 20.4, 12.1, 14.5] },
      { year: 2025, ppg: 17.6, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hip pointer, Week 5", weekly: [20.5, 12.8, 24.1, 15.6, 10.9, 19.3, 16.0, 22.7, 13.4, 18.8, 25.0, 11.5, 17.2, 20.9, 14.6, 19.7] },
    ],
  },
  "justin-herbert-qb": {
    ppg: 18.4,
    seasons: [
      { year: 2023, ppg: 16.8, gamesPlayed: 13, gamesMissed: 4, missedReason: "Fractured index finger, Weeks 14-17", weekly: [15.6, 20.2, 11.5, 19.3, 13.2, 22.0, 20.7, 8.5, 11.6, 10.9, 12.6, 24.0, 28.3] },
      { year: 2024, ppg: 17.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [13.1, 24.6, 11.3, 21.4, 9.8, 6.6, 25.0, 21.7, 23.8, 10.3, 22.6, 13.3, 21.1, 17.7, 22.1, 24.3, 15.6] },
      { year: 2025, ppg: 18.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [21.5, 14.2, 25.8, 16.9, 12.5, 23.0, 17.6, 19.8, 15.3, 26.4, 18.0, 13.7, 22.1, 16.5, 20.9, 14.8, 24.6] },
    ],
  },
  "dak-prescott-qb": {
    ppg: 17.5,
    seasons: [
      { year: 2023, ppg: 18.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [23.7, 12.1, 18.3, 7.1, 11.4, 15.6, 19.9, 15.0, 15.8, 22.1, 25.7, 25.2, 26.7, 25.1, 28.1, 13.6, 15.9] },
      { year: 2024, ppg: 11.2, gamesPlayed: 8, gamesMissed: 9, missedReason: "Hamstring injury, season-ending surgery, Week 9", weekly: [12.7, 15.7, 7.0, 13.8, 8.5, 11.0, 6.6, 14.3] },
      { year: 2025, ppg: 17.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Shoulder contusion, Week 13", weekly: [20.8, 13.5, 24.2, 15.9, 11.2, 22.6, 16.4, 19.0, 14.1, 25.5, 17.8, 12.9, 21.3, 15.0, 23.4, 18.6] },
    ],
  },
  "trevor-lawrence-qb": {
    ppg: 16.8,
    seasons: [
      { year: 2023, ppg: 17.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [20.1, 12.1, 16.6, 10.2, 17.0, 17.2, 10.5, 19.5, 22.9, 13.1, 20.2, 16.5, 22.4, 18.7, 16.7, 19.7, 19.0] },
      { year: 2024, ppg: 14.5, gamesPlayed: 10, gamesMissed: 7, missedReason: "Shoulder injury, Weeks 11-17", weekly: [11.7, 18.1, 11.6, 20.6, 8.8, 20.9, 13.7, 16.3, 13.8, 9.5] },
      { year: 2025, ppg: 16.8, gamesPlayed: 15, gamesMissed: 2, missedReason: "AC joint sprain, Weeks 8-9", weekly: [19.5, 12.8, 22.4, 15.0, 10.5, 20.9, 17.2, 14.6, 24.0, 16.1, 11.9, 21.5, 18.3, 13.4, 19.9] },
    ],
  },
  "jaxson-dart-qb": {
    ppg: 13.5,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 13.5, gamesPlayed: 12, gamesMissed: 5, missedReason: "Beat out for starting job, promoted Week 6", weekly: [9.5, 16.2, 11.8, 18.4, 10.3, 15.9, 12.7, 17.5, 8.9, 14.6, 19.0, 11.2] },
    ],
  },
  "brock-purdy-qb": {
    ppg: 15.5,
    seasons: [
      { year: 2023, ppg: 15.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Rib injury, Week 10", weekly: [17.2, 18.5, 17.8, 15.0, 21.3, 14.7, 21.4, 12.9, 11.3, 5.7, 12.7, 11.6, 21.5, 20.1, 19.6, 11.5] },
      { year: 2024, ppg: 13.9, gamesPlayed: 14, gamesMissed: 3, missedReason: "Shoulder sprain, Weeks 6-8", weekly: [10.7, 8.7, 13.9, 21.6, 12.9, 13.2, 18.9, 13.8, 16.7, 18.5, 16.2, 8.5, 10.4, 10.6] },
      { year: 2025, ppg: 15.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [18.6, 11.2, 20.9, 14.0, 9.8, 17.5, 13.2, 21.4, 10.6, 16.0, 19.8, 12.5, 15.3, 8.9, 18.2, 14.7, 20.1] },
    ],
  },
  "bo-nix-qb": {
    ppg: 15.2,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 12.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [12.9, 11.8, 8.2, 14.9, 10.1, 10.7, 9.0, 15.6, 18.8, 18.2, 11.3, 11.3, 17.5, 5.7, 8.2, 17.3, 16.1] },
      { year: 2025, ppg: 15.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [18.0, 10.5, 20.4, 13.6, 9.2, 17.1, 12.8, 19.9, 11.0, 15.5, 21.0, 13.3, 8.7, 16.8, 14.2, 19.5, 10.9] },
    ],
  },
  "patrick-mahomes-ii-qb": {
    ppg: 13.5,
    seasons: [
      { year: 2023, ppg: 15.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [25.8, 11.6, 20.6, 12.8, 15.4, 7.9, 15.6, 11.5, 17.6, 14.9, 15.9, 15.9, 9.3, 18.5, 17.0, 17.4, 22.6] },
      { year: 2024, ppg: 14.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [15.6, 15.6, 19.2, 9.0, 20.0, 16.7, 16.3, 12.9, 19.2, 8.4, 14.1, 15.5, 9.2, 6.9, 16.7, 19.5, 16.8] },
      { year: 2025, ppg: 13.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, Weeks 9-10", weekly: [16.2, 9.8, 18.5, 12.0, 15.6, 10.4, 19.8, 8.2, 14.5, 17.0, 11.3, 20.1, 9.6, 13.8, 16.4] },
    ],
  },
  "matthew-stafford-qb": {
    ppg: 14.2,
    seasons: [
      { year: 2023, ppg: 13.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Thumb injury, Weeks 15-17", weekly: [14.8, 11.0, 17.2, 11.6, 8.2, 14.9, 17.9, 10.2, 18.5, 8.4, 7.3, 22.5, 19.0, 11.7] },
      { year: 2024, ppg: 15.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [15.2, 12.4, 16.3, 21.8, 18.5, 8.2, 17.5, 31.2, 19.3, 9.1, 13.4, 10.6, 13.6, 22.5, 11.6, 19.8, 9.3] },
      { year: 2025, ppg: 14.2, gamesPlayed: 16, gamesMissed: 1, missedReason: "Back spasms, Week 4", weekly: [17.0, 10.5, 19.2, 12.8, 8.9, 16.4, 13.1, 20.5, 9.7, 15.0, 18.3, 11.6, 14.5, 7.8, 17.9, 13.0] },
    ],
  },
  "jared-goff-qb": {
    ppg: 14.8,
    seasons: [
      { year: 2023, ppg: 15.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [18.7, 21.0, 22.4, 10.5, 9.7, 18.9, 9.7, 19.0, 18.4, 13.9, 12.1, 20.4, 4.8, 10.8, 8.5, 22.6, 22.1] },
      { year: 2024, ppg: 15.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [14.7, 19.5, 15.7, 21.4, 16.0, 17.1, 9.7, 12.8, 6.7, 12.9, 17.0, 23.4, 15.8, 14.8, 17.9, 16.1, 18.8] },
      { year: 2025, ppg: 14.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Oblique strain, Week 6", weekly: [17.5, 11.0, 19.6, 13.2, 9.5, 16.8, 12.4, 20.0, 10.2, 15.6, 18.0, 11.8, 14.0, 8.5, 17.2, 13.7] },
    ],
  },
  "kyler-murray-qb": {
    ppg: 13.8,
    seasons: [
      { year: 2023, ppg: 12.5, gamesPlayed: 8, gamesMissed: 9, missedReason: "Torn ACL, season-ending, Week 9", weekly: [9.2, 8.1, 10.1, 20.3, 17.4, 11.8, 13.2, 9.9] },
      { year: 2024, ppg: 14.9, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, Weeks 8-9", weekly: [23.0, 16.9, 6.3, 16.5, 15.2, 9.5, 18.1, 19.6, 9.2, 11.8, 17.5, 17.7, 11.3, 20.8, 10.1] },
      { year: 2025, ppg: 13.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Ankle sprain, Weeks 3-5", weekly: [16.5, 9.2, 18.8, 11.4, 14.0, 8.6, 20.2, 10.5, 15.8, 12.1, 17.3, 9.9, 16.0, 13.4] },
    ],
  },
  "baker-mayfield-qb": {
    ppg: 12.5,
    seasons: [
      { year: 2023, ppg: 14.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [25.9, 20.3, 18.4, 11.6, 12.9, 16.9, 14.5, 5.8, 14.0, 16.3, 15.9, 4.3, 19.0, 17.4, 13.4, 8.2, 11.7] },
      { year: 2024, ppg: 13.2, gamesPlayed: 16, gamesMissed: 1, missedReason: "Knee sprain, Week 12", weekly: [16.1, 15.3, 25.5, 14.2, 7.9, 9.6, 12.8, 6.0, 10.7, 8.4, 18.6, 16.6, 19.8, 9.7, 9.1, 10.9] },
      { year: 2025, ppg: 12.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [15.0, 9.2, 17.5, 10.8, 7.5, 14.2, 11.0, 18.0, 8.4, 13.6, 16.4, 9.8, 12.0, 6.9, 15.8, 11.2, 14.7] },
    ],
  },
  "jordan-love-qb": {
    ppg: 14.2,
    seasons: [
      { year: 2023, ppg: 14.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [16.0, 4.9, 16.6, 10.9, 13.5, 12.2, 20.7, 18.8, 13.1, 17.0, 27.5, 7.9, 13.1, 14.8, 20.7, 8.6, 15.3] },
      { year: 2024, ppg: 12.5, gamesPlayed: 12, gamesMissed: 5, missedReason: "Knee sprain, Weeks 2-6", weekly: [12.7, 6.9, 15.8, 16.3, 15.3, 13.8, 16.0, 8.6, 6.9, 13.3, 8.0, 16.4] },
      { year: 2025, ppg: 14.2, gamesPlayed: 16, gamesMissed: 1, missedReason: "Elbow contusion, Week 9", weekly: [17.0, 10.2, 19.5, 12.6, 8.8, 16.0, 13.4, 20.5, 9.6, 14.8, 18.2, 11.0, 15.5, 7.9, 17.6, 12.9] },
    ],
  },
  "tyler-shough-qb": {
    ppg: 11.5,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 11.5, gamesPlayed: 11, gamesMissed: 6, missedReason: "Rib injury, Weeks 5-9, briefly benched Week 3", weekly: [14.2, 7.8, 16.5, 9.0, 13.4, 6.5, 18.0, 10.2, 12.6, 8.4, 15.9] },
    ],
  },
  "geno-smith-qb": {
    ppg: 9.8,
    seasons: [
      { year: 2023, ppg: 12.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.7, 6.0, 17.4, 9.5, 19.1, 13.8, 18.2, 18.6, 16.2, 8.7, 10.3, 16.0, 10.4, 17.7, 7.7, 12.3, 8.0] },
      { year: 2024, ppg: 10.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Groin strain, Weeks 9-10", weekly: [6.7, 9.9, 7.5, 11.7, 7.7, 11.6, 19.6, 11.2, 6.3, 5.7, 12.1, 12.1, 12.2, 9.1, 14.1] },
      { year: 2025, ppg: 9.8, gamesPlayed: 13, gamesMissed: 4, missedReason: "Lost starting job, benched Weeks 14-17", weekly: [12.0, 6.5, 14.2, 8.8, 10.5, 5.9, 15.6, 7.2, 11.4, 9.0, 13.8, 6.0, 10.8] },
    ],
  },
  "sam-darnold-qb": {
    ppg: 11.8,
    seasons: [
      { year: 2023, ppg: 7.2, gamesPlayed: 6, gamesMissed: 11, missedReason: "Backup QB, spot duty only", weekly: [9.5, 10.5, 5.7, 6.5, 6.1, 4.9] },
      { year: 2024, ppg: 13.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [12.9, 9.2, 10.1, 16.0, 10.9, 10.4, 16.2, 12.7, 9.0, 10.4, 14.5, 13.8, 18.5, 15.9, 12.2, 12.6, 15.7] },
      { year: 2025, ppg: 11.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hand injury, Week 7", weekly: [14.5, 8.2, 16.8, 10.0, 6.9, 13.5, 9.8, 17.2, 7.5, 12.0, 15.6, 9.2, 11.4, 6.0, 14.0, 10.4] },
    ],
  },
  "aaron-rodgers-qb": {
    ppg: 10.5,
    seasons: [
      { year: 2023, ppg: 9.5, gamesPlayed: 4, gamesMissed: 13, missedReason: "Achilles tear, Week 1", weekly: [6.3, 12.2, 13.3, 6.2] },
      { year: 2024, ppg: 11.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [13.0, 10.3, 7.8, 5.4, 3.7, 10.7, 13.2, 13.1, 13.3, 8.1, 8.7, 6.9, 22.8, 7.3, 17.1, 20.6, 8.4] },
      { year: 2025, ppg: 10.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Calf strain, Weeks 6-7", weekly: [13.0, 7.2, 15.4, 9.0, 5.8, 12.6, 8.4, 16.0, 6.5, 11.2, 14.5, 7.8, 10.0, 5.2, 12.9] },
    ],
  },
  "cam-ward-qb": {
    ppg: 9.8,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 9.8, gamesPlayed: 15, gamesMissed: 2, missedReason: "Rib injury, Weeks 10-11", weekly: [12.5, 6.8, 14.2, 8.0, 5.5, 11.6, 7.4, 15.8, 6.0, 10.2, 13.4, 7.6, 9.0, 4.8, 12.2] },
    ],
  },
  "c-j-stroud-qb": {
    ppg: 9.5,
    seasons: [
      { year: 2023, ppg: 18.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [19.8, 26.2, 25.1, 11.9, 16.1, 20.4, 12.8, 21.1, 20.4, 20.3, 16.9, 20.9, 17.5, 17.4, 18.8, 20.9, 8.0] },
      { year: 2024, ppg: 12.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Concussion protocol, Weeks 11-13", weekly: [9.8, 10.0, 9.9, 15.5, 13.7, 10.5, 15.8, 11.3, 19.7, 17.8, 12.3, 16.4, 8.1, 8.4] },
      { year: 2025, ppg: 9.5, gamesPlayed: 11, gamesMissed: 6, missedReason: "Lost starting job, benched Weeks 12-17", weekly: [12.0, 6.5, 14.2, 8.0, 5.5, 11.4, 7.2, 13.6, 6.0, 9.8, 10.3] },
    ],
  },
  "kirk-cousins-qb": {
    ppg: 8.2,
    seasons: [
      { year: 2023, ppg: 13.2, gamesPlayed: 8, gamesMissed: 9, missedReason: "Achilles tear, Week 8", weekly: [14.3, 7.2, 21.5, 22.8, 6.8, 9.0, 16.6, 7.4] },
      { year: 2024, ppg: 10.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [14.0, 9.0, 11.6, 14.9, 9.6, 9.7, 6.4, 7.6, 14.1, 12.1, 9.1, 11.2, 11.2, 13.0, 8.8, 7.9, 8.3] },
      { year: 2025, ppg: 8.2, gamesPlayed: 12, gamesMissed: 5, missedReason: "Benched for rookie, Weeks 13-17", weekly: [10.5, 5.8, 12.0, 7.0, 4.5, 9.8, 6.2, 11.4, 5.0, 8.6, 10.0, 7.2] },
    ],
  },
  "daniel-jones-qb": {
    ppg: 11.5,
    seasons: [
      { year: 2023, ppg: 9.5, gamesPlayed: 6, gamesMissed: 11, missedReason: "Neck injury, then benched", weekly: [11.1, 9.9, 6.2, 6.0, 12.4, 11.4] },
      { year: 2024, ppg: 7.8, gamesPlayed: 10, gamesMissed: 7, missedReason: "Lost starting job, benched Weeks 11-17", weekly: [5.9, 9.6, 10.9, 5.7, 4.8, 9.3, 9.5, 5.1, 5.7, 11.5] },
      { year: 2025, ppg: 11.5, gamesPlayed: 14, gamesMissed: 3, missedReason: "Groin strain, Weeks 5-6", weekly: [14.0, 7.5, 16.2, 9.0, 12.5, 6.8, 17.5, 8.4, 13.0, 10.2, 15.0, 7.0, 11.8, 12.1] },
    ],
  },
  "bryce-young-qb": {
    ppg: 10.8,
    seasons: [
      { year: 2023, ppg: 7.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, Week 8", weekly: [2.2, 9.6, 9.5, 6.2, 4.1, 6.2, 6.8, 12.8, 9.6, 7.9, 5.9, 6.9, 10.7, 7.1, 6.1, 8.4] },
      { year: 2024, ppg: 6.8, gamesPlayed: 10, gamesMissed: 7, missedReason: "Benched, Weeks 3-9", weekly: [8.3, 5.7, 6.7, 9.3, 6.3, 6.5, 7.6, 5.1, 8.8, 3.7] },
      { year: 2025, ppg: 10.8, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, Weeks 8-9", weekly: [13.5, 7.0, 15.8, 9.2, 5.5, 12.6, 8.0, 16.5, 6.2, 10.5, 14.0, 7.8, 11.0, 5.0, 13.4] },
    ],
  },
  "tua-tagovailoa-qb": {
    ppg: 8.8,
    seasons: [
      { year: 2023, ppg: 15.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hip injury, Weeks 3-5", weekly: [12.6, 18.4, 18.5, 16.4, 10.0, 13.4, 17.3, 16.7, 10.9, 19.0, 26.1, 19.4, 11.0, 11.5] },
      { year: 2024, ppg: 9.5, gamesPlayed: 10, gamesMissed: 7, missedReason: "Multiple concussions, Weeks 2-4 and 12-17", weekly: [8.7, 3.5, 9.9, 12.9, 8.1, 9.6, 10.4, 7.1, 13.9, 10.9] },
      { year: 2025, ppg: 8.8, gamesPlayed: 11, gamesMissed: 6, missedReason: "Concussion protocol Weeks 1-3, shoulder Weeks 14-16", weekly: [11.0, 5.5, 13.2, 7.0, 4.8, 10.5, 6.2, 12.5, 5.0, 9.0, 11.9] },
    ],
  },
  "deshaun-watson-qb": {
    ppg: 9.2,
    seasons: [
      { year: 2023, ppg: 8.5, gamesPlayed: 6, gamesMissed: 11, missedReason: "Shoulder injury, season-ending surgery", weekly: [5.1, 13.2, 11.4, 8.0, 7.9, 5.4] },
      { year: 2024, ppg: 6.5, gamesPlayed: 7, gamesMissed: 10, missedReason: "Achilles tear, Week 7, season-ending", weekly: [7.2, 7.3, 6.8, 2.5, 6.6, 7.8, 7.3] },
      { year: 2025, ppg: 9.2, gamesPlayed: 10, gamesMissed: 7, missedReason: "Recovering from Achilles, then hamstring Weeks 14-15", weekly: [11.5, 5.8, 13.0, 7.2, 4.5, 10.8, 6.0, 12.2, 8.0, 13.0] },
    ],
  },
  "jacoby-brissett-qb": {
    ppg: 10.2,
    seasons: [
      { year: 2023, ppg: 9.8, gamesPlayed: 11, gamesMissed: 6, missedReason: "Backup, spot starts for injured starter", weekly: [11.0, 13.4, 11.9, 10.2, 5.6, 11.7, 10.5, 10.0, 8.7, 10.7, 4.1] },
      { year: 2024, ppg: 8.5, gamesPlayed: 8, gamesMissed: 9, missedReason: "Backup QB, limited playing time", weekly: [7.5, 8.1, 9.7, 8.1, 11.0, 9.7, 6.5, 7.4] },
      { year: 2025, ppg: 10.2, gamesPlayed: 9, gamesMissed: 8, missedReason: "Started when starter injured, then reinjury", weekly: [12.5, 7.0, 14.0, 8.2, 5.5, 11.8, 9.0, 13.5, 10.3] },
    ],
  },
  "malik-willis-qb": {
    ppg: 8.5,
    seasons: [
      { year: 2023, ppg: 5.5, gamesPlayed: 4, gamesMissed: 13, missedReason: "Backup QB, minimal snaps", weekly: [6.8, 5.1, 6.7, 3.4] },
      { year: 2024, ppg: 6.8, gamesPlayed: 5, gamesMissed: 12, missedReason: "Backup, spot duty", weekly: [9.6, 7.9, 6.9, 3.5, 6.1] },
      { year: 2025, ppg: 8.5, gamesPlayed: 6, gamesMissed: 11, missedReason: "Backup, started 3 games for injured starter", weekly: [10.5, 5.8, 12.0, 6.5, 9.2, 7.0] },
    ],
  },
  "anthony-richardson-sr-qb": {
    ppg: 7.5,
    seasons: [
      { year: 2023, ppg: 10.5, gamesPlayed: 4, gamesMissed: 13, missedReason: "Shoulder injury, season-ending surgery, Week 5", weekly: [13.5, 8.0, 9.7, 10.8] },
      { year: 2024, ppg: 9.8, gamesPlayed: 11, gamesMissed: 6, missedReason: "Oblique injury and benching, Weeks 9-14", weekly: [15.1, 5.6, 8.2, 6.4, 10.5, 5.5, 11.4, 14.9, 7.7, 11.3, 11.2] },
      { year: 2025, ppg: 7.5, gamesPlayed: 8, gamesMissed: 9, missedReason: "Lost starting job, benched Weeks 10-17", weekly: [9.5, 5.0, 11.2, 6.5, 8.8, 4.5, 10.0, 4.5] },
    ],
  },
  "michael-penix-jr-qb": {
    ppg: 8.2,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 6.5, gamesPlayed: 3, gamesMissed: 14, missedReason: "Backup QB, limited snaps as rookie", weekly: [7.4, 7.6, 4.5] },
      { year: 2025, ppg: 8.2, gamesPlayed: 6, gamesMissed: 11, missedReason: "Backup, spot starts when Tua injured", weekly: [10.0, 5.5, 11.8, 6.5, 9.2, 6.2] },
    ],
  },
  "will-levis-qb": {
    ppg: 6.5,
    seasons: [
      { year: 2023, ppg: 11.5, gamesPlayed: 9, gamesMissed: 8, missedReason: "Shoulder injury, Weeks 12-17", weekly: [10.7, 13.5, 13.1, 12.4, 8.1, 13.5, 13.3, 6.9, 12.0] },
      { year: 2024, ppg: 9.2, gamesPlayed: 10, gamesMissed: 7, missedReason: "Shoulder injury again, Weeks 8-13", weekly: [10.7, 6.9, 7.3, 12.4, 13.1, 7.2, 9.3, 7.8, 6.4, 10.9] },
      { year: 2025, ppg: 6.5, gamesPlayed: 6, gamesMissed: 11, missedReason: "Lost starting job to rookie Cam Ward, benched Week 7", weekly: [8.5, 4.5, 9.8, 5.2, 7.5, 3.5] },
    ],
  },
  "mac-jones-qb": {
    ppg: 7.8,
    seasons: [
      { year: 2023, ppg: 6.5, gamesPlayed: 11, gamesMissed: 6, missedReason: "Benched, lost starting job Week 12", weekly: [8.7, 3.4, 7.9, 5.1, 6.6, 5.1, 8.9, 8.1, 7.0, 6.5, 4.2] },
      { year: 2024, ppg: 5.2, gamesPlayed: 4, gamesMissed: 13, missedReason: "Backup QB, minimal snaps", weekly: [1.7, 6.2, 9.2, 3.7] },
      { year: 2025, ppg: 7.8, gamesPlayed: 5, gamesMissed: 12, missedReason: "Backup, spot starts for injured Purdy", weekly: [9.5, 5.0, 10.8, 6.2, 7.5] },
    ],
  },
  "spencer-rattler-qb": {
    ppg: 6.2,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 8.5, gamesPlayed: 8, gamesMissed: 9, missedReason: "Rookie starter, benched Weeks 12-17", weekly: [4.4, 7.6, 8.6, 11.2, 9.1, 9.3, 9.1, 8.7] },
      { year: 2025, ppg: 6.2, gamesPlayed: 5, gamesMissed: 12, missedReason: "Lost starting job to rookie Tyler Shough, benched Week 6", weekly: [8.0, 4.0, 9.2, 4.8, 5.0] },
    ],
  },
  "tyler-huntley-qb": {
    ppg: 6.5,
    seasons: [
      { year: 2023, ppg: 5.8, gamesPlayed: 6, gamesMissed: 11, missedReason: "Backup QB, spot starts for injured Lamar Jackson", weekly: [7.3, 4.2, 4.4, 7.0, 7.2, 4.7] },
      { year: 2024, ppg: 4.5, gamesPlayed: 3, gamesMissed: 14, missedReason: "Backup, minimal snaps", weekly: [5.4, 2.9, 5.2] },
      { year: 2025, ppg: 6.5, gamesPlayed: 4, gamesMissed: 13, missedReason: "Backup, brief starts Weeks 15-16 for injured Lamar", weekly: [8.0, 4.0, 9.2, 4.8] },
    ],
  },
  "joe-milton-iii-qb": {
    ppg: 5.8,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 3.5, gamesPlayed: 2, gamesMissed: 15, missedReason: "Backup QB, practice squad call-ups only", weekly: [3.6, 3.4] },
      { year: 2025, ppg: 5.8, gamesPlayed: 3, gamesMissed: 14, missedReason: "Backup, spot start Week 9 for injured Drake Maye", weekly: [7.5, 3.5, 6.4] },
    ],
  },
  "jake-browning-qb": {
    ppg: 6.8,
    seasons: [
      { year: 2023, ppg: 9.5, gamesPlayed: 8, gamesMissed: 9, missedReason: "Started for injured Joe Burrow, then reverted to backup", weekly: [10.0, 7.7, 8.3, 8.2, 11.1, 12.0, 6.7, 12.0] },
      { year: 2024, ppg: 5.2, gamesPlayed: 3, gamesMissed: 14, missedReason: "Backup QB, minimal snaps", weekly: [5.1, 5.0, 5.5] },
      { year: 2025, ppg: 6.8, gamesPlayed: 4, gamesMissed: 13, missedReason: "Backup, spot start Week 11", weekly: [8.5, 4.5, 9.8, 4.4] },
    ],
  },
  "gardner-minshew-qb": {
    ppg: 5.5,
    seasons: [
      { year: 2023, ppg: 8.5, gamesPlayed: 8, gamesMissed: 9, missedReason: "Started and backup rotation", weekly: [6.5, 10.0, 8.1, 6.6, 5.5, 7.6, 9.8, 13.9] },
      { year: 2024, ppg: 6.2, gamesPlayed: 5, gamesMissed: 12, missedReason: "Backup QB, spot starts", weekly: [5.4, 4.2, 10.4, 4.5, 6.5] },
      { year: 2025, ppg: 5.5, gamesPlayed: 3, gamesMissed: 14, missedReason: "Backup, limited snaps behind Kirk Cousins", weekly: [7.0, 3.5, 6.0] },
    ],
  },
  "desmond-ridder-qb": {
    ppg: 5.2,
    seasons: [
      { year: 2023, ppg: 7.5, gamesPlayed: 10, gamesMissed: 7, missedReason: "Lost starting job, benched Weeks 11-17", weekly: [7.2, 6.5, 5.9, 4.9, 9.9, 10.9, 7.8, 4.5, 7.9, 9.5] },
      { year: 2024, ppg: 4.8, gamesPlayed: 3, gamesMissed: 14, missedReason: "Backup QB, minimal snaps", weekly: [4.3, 4.5, 5.6] },
      { year: 2025, ppg: 5.2, gamesPlayed: 2, gamesMissed: 15, missedReason: "Backup, mostly inactive", weekly: [6.5, 3.9] },
    ],
  },
  "kenny-pickett-qb": {
    ppg: 6.8,
    seasons: [
      { year: 2023, ppg: 8.2, gamesPlayed: 12, gamesMissed: 5, missedReason: "Rib injury, Weeks 10-14", weekly: [6.4, 11.2, 12.3, 6.7, 9.7, 6.0, 5.4, 8.6, 4.8, 11.0, 6.1, 10.2] },
      { year: 2024, ppg: 5.5, gamesPlayed: 4, gamesMissed: 13, missedReason: "Backup QB, traded midseason, limited snaps", weekly: [3.7, 5.4, 6.7, 6.2] },
      { year: 2025, ppg: 6.8, gamesPlayed: 5, gamesMissed: 12, missedReason: "Backup, spot starts for injured Deshaun Watson", weekly: [8.5, 4.5, 9.5, 5.0, 6.5] },
    ],
  },
  "jahmyr-gibbs-rb": {
    ppg: 22.8,
    seasons: [
      { year: 2023, ppg: 15.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [20.1, 12.7, 14.9, 19.9, 13.2, 10.2, 10.4, 17.8, 20.7, 11.8, 18.7, 12.8, 9.5, 16.5, 15.6, 24.3, 14.4] },
      { year: 2024, ppg: 21.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, Weeks 8-9", weekly: [17.7, 16.0, 29.2, 10.3, 25.8, 17.9, 12.4, 23.1, 25.6, 26.9, 23.8, 39.8, 11.8, 23.9, 18.3] },
      { year: 2025, ppg: 22.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Knee soreness, Week 12", weekly: [28.4, 19.2, 24.6, 15.8, 21.3, 30.1, 18.7, 25.5, 12.9, 27.8, 20.4, 16.6, 23.9, 29.2, 17.5, 28.9] },
    ],
  },
  "bijan-robinson-rb": {
    ppg: 22.3,
    seasons: [
      { year: 2023, ppg: 14.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.7, 21.0, 22.0, 9.1, 12.8, 12.4, 12.3, 17.0, 15.6, 8.5, 20.8, 10.9, 17.3, 8.1, 17.8, 13.4, 12.7] },
      { year: 2024, ppg: 19.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [33.0, 15.2, 24.1, 21.1, 19.6, 27.7, 20.7, 16.1, 22.9, 19.9, 19.8, 13.4, 12.9, 22.0, 18.1, 20.3, 9.8] },
      { year: 2025, ppg: 22.3, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, Week 6", weekly: [26.1, 18.4, 23.7, 14.9, 29.5, 20.2, 16.8, 25.9, 19.1, 22.6, 30.4, 17.3, 24.8, 21.0, 28.2, 19.6] },
    ],
  },
  "christian-mccaffrey-rb": {
    ppg: 20.1,
    seasons: [
      { year: 2023, ppg: 24.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Shoulder soreness, Week 3", weekly: [36.2, 29.1, 19.3, 22.0, 21.9, 18.1, 31.8, 12.4, 16.6, 24.9, 17.5, 18.6, 34.8, 39.1, 29.9, 19.8] },
      { year: 2024, ppg: 9.2, gamesPlayed: 4, gamesMissed: 13, missedReason: "Achilles/calf injury, out most of season", weekly: [7.2, 4.0, 8.6, 17.0] },
      { year: 2025, ppg: 20.1, gamesPlayed: 14, gamesMissed: 3, missedReason: "Calf tightness, Weeks 4-6", weekly: [24.6, 17.3, 28.9, 15.2, 22.4, 19.8, 12.6, 26.1, 20.7, 14.9, 23.5, 18.2, 27.0, 20.9] },
    ],
  },
  "jonathan-taylor-rb": {
    ppg: 21.6,
    seasons: [
      { year: 2023, ppg: 14.6, gamesPlayed: 10, gamesMissed: 7, missedReason: "Ankle injury and early-season holdout", weekly: [11.5, 14.8, 12.1, 16.7, 15.8, 18.2, 11.4, 12.0, 16.1, 17.4] },
      { year: 2024, ppg: 19.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [27.9, 11.7, 21.6, 19.2, 24.8, 20.7, 16.0, 25.1, 25.7, 26.2, 13.9, 11.9, 14.1, 15.2, 18.1, 20.9, 16.8] },
      { year: 2025, ppg: 21.6, gamesPlayed: 16, gamesMissed: 1, missedReason: "Rib injury, Week 9", weekly: [25.3, 18.6, 22.9, 30.1, 16.4, 24.7, 19.2, 27.5, 21.0, 13.8, 23.6, 29.4, 17.9, 22.1, 25.8, 20.5] },
    ],
  },
  "james-cook-iii-rb": {
    ppg: 18.4,
    seasons: [
      { year: 2023, ppg: 15.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [11.0, 19.7, 27.6, 9.6, 22.2, 18.6, 18.4, 12.9, 17.6, 15.9, 17.2, 12.1, 15.4, 14.0, 11.4, 15.1, 9.9] },
      { year: 2024, ppg: 17.2, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, Week 14", weekly: [12.0, 18.7, 16.2, 16.3, 21.2, 17.2, 24.7, 26.0, 14.5, 10.6, 26.4, 25.3, 11.0, 9.1, 14.1, 11.9] },
      { year: 2025, ppg: 18.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [22.5, 14.9, 19.3, 25.1, 12.6, 17.8, 21.4, 15.2, 27.0, 18.9, 13.5, 23.7, 16.1, 20.8, 14.4, 24.2, 19.6] },
    ],
  },
  "ashton-jeanty-rb": {
    ppg: 16.5,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 16.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [11.2, 20.6, 14.8, 24.3, 9.7, 18.5, 22.1, 13.4, 26.8, 16.0, 10.9, 19.7, 15.3, 23.5, 12.6, 21.4, 17.2] },
    ],
  },
  "chase-brown-rb": {
    ppg: 18.1,
    seasons: [
      { year: 2023, ppg: 8.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.3, 10.9, 8.3, 5.1, 9.0, 8.3, 11.3, 6.8, 9.0, 8.0, 5.0, 8.5, 13.3, 8.5, 3.9, 11.8, 7.8] },
      { year: 2024, ppg: 16.8, gamesPlayed: 15, gamesMissed: 2, missedReason: "Groin strain, Weeks 6-7", weekly: [16.8, 21.5, 10.2, 21.9, 9.0, 21.8, 12.6, 20.2, 10.9, 16.3, 17.9, 22.7, 14.9, 13.2, 22.1] },
      { year: 2025, ppg: 18.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [22.9, 14.2, 19.6, 25.4, 11.8, 17.3, 21.9, 13.6, 26.2, 18.0, 15.1, 23.8, 12.4, 20.5, 16.7, 24.1, 19.3] },
    ],
  },
  "saquon-barkley-rb": {
    ppg: 17.6,
    seasons: [
      { year: 2023, ppg: 14.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Ankle sprain, Weeks 10-12", weekly: [11.0, 11.6, 8.0, 19.3, 6.7, 22.1, 10.4, 19.9, 18.2, 16.8, 14.3, 5.4, 22.0, 21.5] },
      { year: 2024, ppg: 21.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hip soreness, Week 15", weekly: [23.7, 17.4, 15.6, 34.6, 14.9, 15.7, 31.1, 18.9, 13.8, 32.2, 14.4, 11.8, 10.7, 31.3, 30.0, 34.3] },
      { year: 2025, ppg: 17.6, gamesPlayed: 15, gamesMissed: 2, missedReason: "Knee soreness, Weeks 7-8", weekly: [21.4, 14.6, 18.9, 25.7, 12.3, 19.5, 16.8, 22.9, 11.6, 20.1, 15.4, 24.3, 17.0, 13.9, 26.0] },
    ],
  },
  "omarion-hampton-rb": {
    ppg: 15.9,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 15.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Wrist injury, Week 11", weekly: [12.6, 18.9, 10.4, 21.7, 14.3, 24.1, 9.8, 17.5, 20.6, 13.2, 25.4, 11.9, 16.0, 19.3, 22.8, 14.7] },
    ],
  },
  "de-von-achane-rb": {
    ppg: 18.9,
    seasons: [
      { year: 2023, ppg: 14.2, gamesPlayed: 12, gamesMissed: 5, missedReason: "Knee sprain, Weeks 11-15", weekly: [18.5, 19.2, 18.2, 9.0, 18.1, 14.6, 7.1, 18.0, 11.5, 16.7, 10.3, 9.2] },
      { year: 2024, ppg: 17.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Concussion, Weeks 9-10", weekly: [28.2, 17.3, 8.8, 26.1, 18.1, 23.5, 25.8, 13.1, 20.8, 12.0, 16.1, 22.5, 9.7, 11.5, 9.0] },
      { year: 2025, ppg: 18.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Toe injury, Week 5", weekly: [23.6, 15.9, 21.2, 27.8, 12.4, 18.7, 24.9, 14.1, 20.3, 26.5, 16.8, 11.6, 22.0, 19.4, 25.1, 17.2] },
    ],
  },
  "derrick-henry-rb": {
    ppg: 14.1,
    seasons: [
      { year: 2023, ppg: 15.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [21.4, 24.3, 18.9, 14.1, 11.2, 17.8, 16.0, 12.2, 17.3, 22.6, 10.9, 11.6, 11.2, 11.7, 10.9, 9.1, 17.2] },
      { year: 2024, ppg: 19.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [21.1, 11.3, 31.6, 9.7, 24.8, 21.0, 16.1, 17.5, 11.1, 18.4, 24.6, 22.9, 13.2, 33.3, 23.8, 22.5, 13.7] },
      { year: 2025, ppg: 14.1, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, Weeks 8-9", weekly: [18.4, 11.6, 16.9, 22.3, 9.8, 14.5, 19.7, 12.1, 24.0, 10.4, 17.2, 15.6, 8.9, 20.5, 13.3] },
    ],
  },
  "kenneth-walker-iii-rb": {
    ppg: 13.2,
    seasons: [
      { year: 2023, ppg: 13.8, gamesPlayed: 15, gamesMissed: 2, missedReason: "Oblique strain, Weeks 4-5", weekly: [10.3, 12.9, 17.0, 7.5, 20.0, 13.9, 13.9, 8.7, 19.2, 10.6, 17.9, 8.8, 17.1, 15.3, 13.9] },
      { year: 2024, ppg: 15.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, Week 12", weekly: [13.0, 10.4, 13.1, 26.0, 13.4, 14.4, 23.6, 12.6, 7.6, 22.4, 13.5, 11.2, 18.3, 11.9, 19.8, 23.2] },
      { year: 2025, ppg: 13.2, gamesPlayed: 12, gamesMissed: 5, missedReason: "Hamstring injury, Weeks 9-13", weekly: [17.6, 10.4, 15.8, 20.3, 9.1, 13.7, 18.9, 11.5, 16.2, 14.0, 8.6, 20.7] },
    ],
  },
  "kyren-williams-rb": {
    ppg: 13.9,
    seasons: [
      { year: 2023, ppg: 16.4, gamesPlayed: 12, gamesMissed: 5, missedReason: "Ankle sprain, Weeks 13-17", weekly: [29.8, 13.5, 23.9, 9.3, 11.3, 18.2, 20.1, 12.2, 15.8, 21.1, 9.2, 12.4] },
      { year: 2024, ppg: 15.1, gamesPlayed: 16, gamesMissed: 1, missedReason: "Quad contusion, Week 6", weekly: [23.1, 22.7, 20.3, 9.2, 8.0, 10.0, 5.8, 9.9, 12.1, 17.9, 18.7, 19.2, 14.4, 22.9, 9.9, 17.5] },
      { year: 2025, ppg: 13.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [17.8, 11.2, 15.6, 20.4, 9.7, 14.9, 18.3, 12.0, 16.7, 10.5, 19.6, 13.4, 15.9, 8.8, 17.1, 12.6, 14.3] },
    ],
  },
  "jeremiyah-love-rb": {
    ppg: 12.8,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 12.8, gamesPlayed: 15, gamesMissed: 2, missedReason: "Shoulder sprain, Weeks 6-7", weekly: [9.4, 16.2, 11.8, 19.5, 8.1, 14.6, 17.9, 10.3, 13.7, 20.1, 9.9, 15.4, 12.2, 18.0, 11.0] },
    ],
  },
  "josh-jacobs-rb": {
    ppg: 11.8,
    seasons: [
      { year: 2023, ppg: 13.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [15.9, 14.5, 14.6, 13.6, 9.1, 11.2, 8.3, 15.8, 12.5, 8.7, 10.0, 7.4, 17.5, 11.9, 17.2, 22.6, 11.9] },
      { year: 2024, ppg: 12.4, gamesPlayed: 16, gamesMissed: 1, missedReason: "Foot sprain, Week 10", weekly: [12.7, 7.0, 8.8, 13.8, 14.2, 17.4, 9.1, 14.3, 8.8, 7.6, 15.2, 8.5, 18.0, 17.4, 16.4, 9.2] },
      { year: 2025, ppg: 11.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Knee soreness, Weeks 11-13", weekly: [15.6, 9.8, 13.2, 17.4, 8.5, 11.9, 16.0, 10.3, 14.7, 7.9, 18.2, 12.5, 9.1, 15.3] },
    ],
  },
  "javonte-williams-rb": {
    ppg: 13.4,
    seasons: [
      { year: 2023, ppg: 10.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.7, 12.6, 6.1, 11.5, 4.1, 7.0, 13.3, 8.7, 6.1, 12.1, 15.7, 15.8, 13.8, 8.3, 5.8, 14.1, 11.7] },
      { year: 2024, ppg: 11.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Shoulder stinger, Week 8", weekly: [16.1, 8.6, 9.5, 9.8, 11.5, 12.3, 16.0, 14.2, 8.0, 9.3, 10.5, 9.6, 16.0, 13.2, 12.5, 6.9] },
      { year: 2025, ppg: 13.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [16.8, 9.4, 12.7, 18.1, 7.9, 14.2, 10.6, 17.5, 11.3, 15.9, 8.2, 13.5, 19.0, 10.1, 16.4, 9.7, 14.8] },
    ],
  },
  "travis-etienne-jr-rb": {
    ppg: 10.6,
    seasons: [
      { year: 2023, ppg: 13.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [16.6, 15.2, 10.1, 10.6, 18.5, 9.4, 25.3, 13.2, 9.5, 15.2, 10.3, 11.3, 18.3, 19.9, 12.3, 5.7, 13.2] },
      { year: 2024, ppg: 12.1, gamesPlayed: 16, gamesMissed: 1, missedReason: "Toe sprain, Week 13", weekly: [13.4, 7.5, 4.4, 12.9, 7.6, 11.4, 12.3, 13.5, 16.4, 20.3, 12.5, 15.6, 13.7, 7.7, 10.5, 13.9] },
      { year: 2025, ppg: 10.6, gamesPlayed: 13, gamesMissed: 4, missedReason: "Rib injury, Weeks 5-8", weekly: [14.2, 8.6, 12.9, 16.5, 7.3, 11.8, 15.4, 9.7, 13.1, 6.9, 17.0, 10.4, 12.6] },
    ],
  },
  "cam-skattebo-rb": {
    ppg: 11.9,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 11.9, gamesPlayed: 14, gamesMissed: 3, missedReason: "Ankle sprain, Weeks 9-11", weekly: [8.4, 15.6, 10.2, 13.9, 7.1, 16.8, 9.5, 12.3, 17.4, 8.9, 14.1, 11.0, 15.2, 9.8] },
    ],
  },
  "d-andre-swift-rb": {
    ppg: 10.5,
    seasons: [
      { year: 2023, ppg: 12.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [17.6, 6.9, 9.0, 14.2, 13.5, 14.8, 13.3, 4.7, 11.3, 7.2, 15.0, 13.3, 12.9, 9.7, 17.3, 16.5, 17.0] },
      { year: 2024, ppg: 11.2, gamesPlayed: 15, gamesMissed: 2, missedReason: "Concussion, Weeks 3-4", weekly: [12.8, 7.2, 13.7, 17.1, 8.4, 12.1, 10.0, 7.1, 11.8, 14.7, 5.8, 12.6, 12.3, 10.8, 11.6] },
      { year: 2025, ppg: 10.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Groin strain, Week 10", weekly: [13.9, 8.4, 11.6, 15.7, 7.2, 10.8, 14.3, 9.1, 12.5, 16.0, 8.7, 11.3, 6.9, 13.1, 10.0, 15.4] },
    ],
  },
  "bucky-irving-rb": {
    ppg: 13.2,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 13.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hamstring strain, Week 12", weekly: [13.5, 15.5, 25.5, 12.1, 12.9, 9.6, 8.9, 12.9, 25.4, 18.9, 17.1, 13.1, 8.8, 10.4, 12.9, 4.9] },
      { year: 2025, ppg: 13.2, gamesPlayed: 14, gamesMissed: 3, missedReason: "Shoulder injury, Weeks 6-8", weekly: [16.8, 10.4, 14.7, 18.2, 9.1, 12.6, 15.9, 8.7, 17.3, 11.5, 13.8, 9.9, 16.1, 12.0] },
    ],
  },
  "quinshon-judkins-rb": {
    ppg: 12.1,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 12.1, gamesPlayed: 16, gamesMissed: 1, missedReason: "Rib contusion, Week 9", weekly: [9.6, 15.3, 11.0, 17.8, 8.4, 13.6, 10.2, 16.5, 12.9, 7.8, 14.4, 18.1, 9.3, 11.7, 15.0, 10.6] },
    ],
  },
  "david-montgomery-rb": {
    ppg: 10.8,
    seasons: [
      { year: 2023, ppg: 12.9, gamesPlayed: 15, gamesMissed: 2, missedReason: "Knee sprain, Weeks 6-7", weekly: [9.9, 17.7, 6.2, 20.8, 11.2, 13.5, 11.8, 9.1, 8.9, 20.0, 17.7, 11.8, 15.8, 9.2, 9.9] },
      { year: 2024, ppg: 11.4, gamesPlayed: 12, gamesMissed: 5, missedReason: "Knee injury, Weeks 9-13", weekly: [10.3, 10.7, 9.0, 8.8, 8.3, 14.8, 10.0, 9.8, 16.1, 18.8, 10.5, 9.7] },
      { year: 2025, ppg: 10.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Ankle sprain, Weeks 3-5", weekly: [13.6, 8.9, 12.4, 15.8, 7.5, 11.2, 14.9, 9.3, 12.0, 16.3, 10.1, 7.8, 13.4, 11.6] },
    ],
  },
  "treveyon-henderson-rb": {
    ppg: 10.4,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 10.4, gamesPlayed: 15, gamesMissed: 2, missedReason: "Foot sprain, Weeks 8-9", weekly: [7.8, 13.6, 9.2, 15.4, 6.5, 11.9, 14.2, 8.1, 12.7, 5.9, 16.0, 9.8, 11.3, 7.4, 13.0] },
    ],
  },
  "bhayshul-tuten-rb": {
    ppg: 9.6,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 9.6, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, Weeks 10-12", weekly: [6.9, 12.4, 8.5, 14.8, 5.7, 10.9, 13.2, 7.6, 9.4, 11.8, 6.2, 14.0, 8.0, 10.6] },
    ],
  },
  "jadarian-price-rb": {
    ppg: 8.8,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 8.8, gamesPlayed: 13, gamesMissed: 4, missedReason: "Concussion, Weeks 5-6", weekly: [6.2, 11.4, 7.9, 13.6, 5.0, 9.8, 12.1, 6.7, 8.4, 10.9, 5.5, 13.0, 7.1] },
    ],
  },
  "jaylen-warren-rb": {
    ppg: 9.7,
    seasons: [
      { year: 2023, ppg: 10.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hamstring strain, Week 11", weekly: [21.3, 11.3, 9.2, 7.8, 9.2, 4.1, 12.9, 6.5, 11.7, 7.2, 10.5, 14.9, 21.4, 10.8, 8.8, 6.8] },
      { year: 2024, ppg: 11.8, gamesPlayed: 15, gamesMissed: 2, missedReason: "Knee sprain, Weeks 7-8", weekly: [13.9, 16.5, 8.3, 5.1, 11.7, 16.8, 18.4, 12.6, 7.9, 10.8, 11.5, 11.6, 8.7, 12.5, 10.7] },
      { year: 2025, ppg: 9.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [12.6, 7.8, 10.4, 14.9, 6.5, 9.1, 13.3, 8.0, 11.6, 5.9, 15.2, 9.8, 7.2, 12.0, 10.7, 8.4, 13.9] },
    ],
  },
  "tony-pollard-rb": {
    ppg: 9.4,
    seasons: [
      { year: 2023, ppg: 11.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [14.2, 22.1, 6.8, 11.9, 15.6, 8.2, 11.1, 7.5, 14.0, 9.3, 11.5, 7.8, 15.3, 16.5, 6.9, 9.1, 9.4] },
      { year: 2024, ppg: 10.2, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, Week 14", weekly: [3.6, 14.3, 8.4, 9.5, 6.5, 4.9, 13.6, 14.6, 10.6, 12.0, 7.2, 11.5, 8.9, 9.7, 15.1, 12.8] },
      { year: 2025, ppg: 9.4, gamesPlayed: 15, gamesMissed: 2, missedReason: "Groin strain, Weeks 4-5", weekly: [11.9, 7.2, 10.6, 14.1, 6.0, 9.3, 12.8, 7.7, 10.1, 13.5, 5.8, 9.9, 8.4, 12.2, 7.5] },
    ],
  },
  "rhamondre-stevenson-rb": {
    ppg: 8.6,
    seasons: [
      { year: 2023, ppg: 12.8, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, Weeks 5-6", weekly: [17.8, 12.3, 16.3, 11.5, 12.9, 3.8, 14.7, 8.9, 17.7, 16.2, 8.5, 13.9, 12.6, 17.6, 7.3] },
      { year: 2024, ppg: 9.1, gamesPlayed: 13, gamesMissed: 4, missedReason: "Benching after fumbles plus knee injury", weekly: [10.9, 3.1, 13.8, 6.8, 7.0, 5.7, 13.7, 5.8, 7.5, 10.7, 15.7, 10.6, 7.0] },
      { year: 2025, ppg: 8.6, gamesPlayed: 12, gamesMissed: 5, missedReason: "Ribs injury, Weeks 8-12", weekly: [11.2, 6.4, 9.8, 13.6, 5.1, 8.3, 12.0, 7.5, 9.6, 4.8, 13.9, 8.9] },
    ],
  },
  "chuba-hubbard-rb": {
    ppg: 10.8,
    seasons: [
      { year: 2023, ppg: 9.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [10.0, 8.7, 6.1, 8.4, 4.9, 15.3, 11.7, 7.7, 6.5, 12.0, 10.8, 10.2, 14.5, 5.8, 10.3, 6.5, 10.4] },
      { year: 2024, ppg: 12.1, gamesPlayed: 16, gamesMissed: 1, missedReason: "Groin strain, Week 9", weekly: [14.9, 10.9, 15.6, 13.8, 7.8, 8.0, 5.1, 12.2, 16.4, 14.6, 10.8, 18.8, 11.8, 14.4, 9.8, 8.7] },
      { year: 2025, ppg: 10.8, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, Weeks 12-13", weekly: [13.4, 8.1, 11.6, 15.0, 6.9, 10.3, 14.2, 7.5, 12.8, 9.0, 16.1, 8.7, 11.0, 6.4, 13.7] },
    ],
  },
  "rico-dowdle-rb": {
    ppg: 8.2,
    seasons: [
      { year: 2023, ppg: 6.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, Weeks 9-11", weekly: [5.9, 8.0, 8.9, 9.3, 7.3, 7.9, 9.1, 7.2, 9.6, 6.0, 4.8, 3.5, 5.2, 2.5] },
      { year: 2024, ppg: 9.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Quad contusion, Week 15", weekly: [5.7, 12.2, 14.8, 10.0, 11.7, 5.7, 10.8, 7.2, 10.3, 12.0, 9.6, 8.8, 8.1, 6.9, 16.6, 8.0] },
      { year: 2025, ppg: 8.2, gamesPlayed: 13, gamesMissed: 4, missedReason: "Foot sprain, Weeks 6-9", weekly: [10.4, 5.6, 8.9, 12.7, 4.3, 7.2, 11.5, 6.0, 9.6, 3.8, 12.1, 7.4, 8.8] },
    ],
  },
  "j-k-dobbins-rb": {
    ppg: 7.9,
    seasons: [
      { year: 2023, ppg: 8.1, gamesPlayed: 8, gamesMissed: 9, missedReason: "Knee injury, out for season", weekly: [10.2, 8.1, 9.6, 4.1, 4.5, 11.6, 8.3, 8.4] },
      { year: 2024, ppg: 10.6, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hamstring strain, Weeks 6-9", weekly: [15.2, 14.5, 10.7, 11.3, 5.7, 8.1, 14.6, 10.9, 13.0, 6.4, 8.7, 6.0, 12.7] },
      { year: 2025, ppg: 7.9, gamesPlayed: 11, gamesMissed: 6, missedReason: "Ankle sprain, Weeks 3-8", weekly: [9.8, 5.2, 8.4, 12.0, 3.9, 6.7, 10.9, 5.5, 8.1, 4.4, 11.3] },
    ],
  },
  "rj-harvey-rb": {
    ppg: 7.4,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 7.4, gamesPlayed: 12, gamesMissed: 5, missedReason: "Hamstring strain, Weeks 9-13", weekly: [5.6, 9.8, 6.3, 11.5, 4.2, 8.0, 10.4, 5.9, 7.1, 9.3, 4.8, 6.6] },
    ],
  },
  "kyle-monangai-rb": {
    ppg: 6.9,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 6.9, gamesPlayed: 11, gamesMissed: 6, missedReason: "Ankle sprain, Weeks 4-9", weekly: [5.1, 8.9, 4.6, 10.7, 3.8, 7.4, 9.6, 5.0, 6.8, 4.2, 9.9] },
    ],
  },
  "blake-corum-rb": {
    ppg: 8.6,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 6.4, gamesPlayed: 14, gamesMissed: 3, missedReason: "Quad strain, Weeks 8-10", weekly: [3.1, 5.9, 4.5, 5.5, 9.3, 10.3, 6.3, 6.8, 10.4, 4.7, 4.4, 8.0, 5.7, 4.7] },
      { year: 2025, ppg: 8.6, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hamstring strain, Weeks 5-8", weekly: [6.9, 11.4, 5.8, 9.7, 4.3, 10.2, 7.5, 12.0, 6.1, 8.8, 5.4, 9.1, 7.0] },
    ],
  },
  "jonathon-brooks-rb": {
    ppg: 7.9,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 5.8, gamesPlayed: 6, gamesMissed: 11, missedReason: "ACL tear, out most of season", weekly: [3.9, 6.1, 5.8, 8.5, 5.3, 5.2] },
      { year: 2025, ppg: 7.9, gamesPlayed: 12, gamesMissed: 5, missedReason: "Knee soreness, Weeks 10-14", weekly: [6.2, 10.5, 5.0, 9.4, 3.8, 8.6, 11.1, 5.5, 7.8, 9.9, 4.4, 12.0] },
    ],
  },
  "kenny-gainwell-rb": {
    ppg: 6.8,
    seasons: [
      { year: 2023, ppg: 6.2, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hamstring strain, Week 13", weekly: [2.3, 7.7, 3.7, 6.1, 4.9, 9.9, 7.7, 3.2, 9.1, 4.0, 7.8, 7.7, 6.8, 7.4, 7.3, 3.6] },
      { year: 2024, ppg: 7.4, gamesPlayed: 15, gamesMissed: 2, missedReason: "Concussion, Weeks 9-10", weekly: [6.6, 9.2, 8.5, 5.9, 4.6, 4.4, 9.6, 6.4, 11.1, 10.0, 8.4, 5.1, 8.1, 4.9, 8.2] },
      { year: 2025, ppg: 6.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Ankle sprain, Weeks 6-8", weekly: [8.6, 4.9, 7.2, 10.3, 3.5, 6.1, 9.4, 5.0, 7.9, 4.2, 8.1, 6.5, 9.0, 5.6] },
    ],
  },
  "rachaad-white-rb": {
    ppg: 7.2,
    seasons: [
      { year: 2023, ppg: 12.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.1, 14.9, 9.8, 8.3, 11.9, 12.8, 14.7, 12.3, 12.5, 17.1, 11.7, 17.8, 10.0, 22.4, 7.1, 6.8, 11.6] },
      { year: 2024, ppg: 9.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, Week 11", weekly: [7.2, 12.2, 6.0, 7.8, 7.6, 15.3, 11.4, 13.5, 7.1, 4.0, 8.9, 8.4, 11.5, 13.4, 13.0, 9.5] },
      { year: 2025, ppg: 7.2, gamesPlayed: 14, gamesMissed: 3, missedReason: "Lost role to committee mate, Weeks 4-6", weekly: [9.4, 5.6, 8.1, 11.7, 4.3, 6.9, 10.5, 5.2, 8.6, 3.9, 9.9, 6.4, 7.5, 4.8] },
    ],
  },
  "jacory-croskey-merritt-rb": {
    ppg: 13.2,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 13.2, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, 1 game", weekly: [6.4, 14.2, 9.8, 18.6, 11.0, 15.4, 4.2, 20.8, 12.6, 16.0, 8.4, 22.4, 10.8, 17.2, 9.0, 13.6] },
    ],
  },
  "aaron-jones-sr-rb": {
    ppg: 7.6,
    seasons: [
      { year: 2023, ppg: 11.8, gamesPlayed: 11, gamesMissed: 6, missedReason: "Knee injury, Weeks 7-12", weekly: [12.7, 15.1, 7.5, 8.0, 7.0, 21.1, 10.7, 19.3, 6.4, 16.1, 5.9] },
      { year: 2024, ppg: 9.6, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hamstring strain, Weeks 4-7", weekly: [12.1, 9.9, 9.3, 6.0, 7.8, 5.1, 11.3, 15.5, 8.7, 10.5, 13.4, 8.4, 6.8] },
      { year: 2025, ppg: 7.6, gamesPlayed: 12, gamesMissed: 5, missedReason: "Aging-related decline, wrist injury Weeks 10-13", weekly: [9.4, 5.8, 8.2, 11.6, 4.5, 7.0, 10.3, 5.3, 8.7, 4.1, 9.9, 7.4] },
    ],
  },
  "jordan-mason-rb": {
    ppg: 8.1,
    seasons: [
      { year: 2023, ppg: 5.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.2, 7.6, 6.2, 7.9, 3.3, 4.4, 5.5, 7.2, 5.5, 5.9, 3.3, 5.2, 4.0, 6.0, 4.5, 3.1, 5.0] },
      { year: 2024, ppg: 9.8, gamesPlayed: 12, gamesMissed: 5, missedReason: "Shoulder injury, Weeks 8-12", weekly: [7.4, 15.4, 6.9, 10.9, 6.5, 5.9, 9.3, 7.3, 15.5, 13.5, 10.6, 8.4] },
      { year: 2025, ppg: 8.1, gamesPlayed: 14, gamesMissed: 3, missedReason: "Ankle sprain, Weeks 5-7", weekly: [10.2, 5.9, 8.7, 12.4, 4.6, 7.3, 11.0, 5.2, 9.1, 6.4, 8.5, 3.8, 10.6, 7.9] },
    ],
  },
  "tyrone-tracy-jr-rb": {
    ppg: 6.2,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 8.9, gamesPlayed: 14, gamesMissed: 3, missedReason: "Concussion, Weeks 6-7", weekly: [10.1, 5.8, 4.3, 8.7, 4.8, 6.4, 12.0, 11.4, 16.0, 5.1, 6.8, 12.1, 6.6, 14.5] },
      { year: 2025, ppg: 6.2, gamesPlayed: 12, gamesMissed: 5, missedReason: "Lost starting job, Weeks 9-13", weekly: [8.4, 4.6, 7.1, 9.8, 3.2, 5.9, 8.7, 4.0, 6.5, 3.8, 9.2, 5.0] },
    ],
  },
  "chris-rodriguez-jr-rb": {
    ppg: 3.6,
    seasons: [
      { year: 2023, ppg: 3.8, gamesPlayed: 10, gamesMissed: 7, missedReason: "Deep backup role, healthy scratches", weekly: [4.0, 5.8, 6.0, 4.5, 2.7, 4.4, 2.4, 2.6, 2.5, 3.1] },
      { year: 2024, ppg: 4.2, gamesPlayed: 12, gamesMissed: 5, missedReason: "Healthy scratch behind depth chart, Weeks 9-13", weekly: [3.9, 3.8, 4.0, 3.3, 4.3, 4.2, 3.6, 4.5, 4.3, 2.9, 6.3, 5.3] },
      { year: 2025, ppg: 3.6, gamesPlayed: 9, gamesMissed: 8, missedReason: "Healthy scratch behind depth chart, Weeks 5-12", weekly: [2.4, 5.8, 1.6, 4.9, 3.1, 6.2, 2.0, 4.5, 1.9] },
    ],
  },
  "alvin-kamara-rb": {
    ppg: 3.5,
    seasons: [
      { year: 2023, ppg: 4.2, gamesPlayed: 15, gamesMissed: 2, missedReason: "Rib injury, 2 games", weekly: [2.7, 2.5, 2.9, 3.3, 5.9, 3.1, 5.4, 4.8, 3.0, 5.5, 5.5, 5.7, 6.2, 3.4, 3.1] },
      { year: 2024, ppg: 3.5, gamesPlayed: 13, gamesMissed: 4, missedReason: "Knee and ankle injuries", weekly: [4.6, 4.8, 1.9, 2.0, 3.4, 2.9, 5.2, 2.8, 2.4, 4.1, 2.3, 4.8, 4.3] },
      { year: 2025, ppg: 3.5, gamesPlayed: 12, gamesMissed: 5, missedReason: "Achilles injury, out 5 games", weekly: [5.2, 3.1, 0.0, 6.8, 2.4, 4.0, 1.5, 7.2, 0.0, 3.8, 5.5, 2.0] },
    ],
  },
  "brian-robinson-jr-rb": {
    ppg: 4.1,
    seasons: [
      { year: 2023, ppg: 5.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.7, 7.5, 6.9, 3.5, 8.3, 4.2, 1.6, 4.0, 2.2, 5.0, 4.6, 7.3, 6.9, 2.5, 5.4, 6.1, 4.0] },
      { year: 2024, ppg: 4.6, gamesPlayed: 15, gamesMissed: 2, missedReason: "Knee injury, 2 games", weekly: [3.1, 3.7, 4.8, 3.1, 3.0, 5.9, 7.0, 3.3, 4.3, 4.8, 4.3, 8.6, 3.7, 3.9, 5.5] },
      { year: 2025, ppg: 4.1, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, 1 game", weekly: [3.2, 6.1, 2.0, 7.4, 4.5, 1.8, 5.0, 8.2, 3.3, 0.0, 6.6, 2.9, 4.1, 5.8, 1.2, 3.6] },
    ],
  },
  "justice-hill-rb": {
    ppg: 4.0,
    seasons: [
      { year: 2023, ppg: 4.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Toe injury, 1 game", weekly: [6.4, 4.4, 6.2, 4.3, 5.1, 7.3, 3.8, 4.0, 2.9, 4.8, 2.6, 4.7, 3.7, 6.7, 3.5, 6.4] },
      { year: 2024, ppg: 5.3, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.8, 3.5, 7.2, 4.0, 4.9, 5.5, 4.1, 4.3, 4.2, 7.2, 3.2, 4.9, 8.3, 5.5, 4.2, 6.1, 5.2] },
      { year: 2025, ppg: 4.0, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, 3 games", weekly: [6.2, 3.4, 0.0, 7.1, 4.8, 2.2, 5.5, 1.0, 8.0, 3.9, 2.6, 6.4, 0.0, 4.3] },
    ],
  },
  "ray-davis-rb": {
    ppg: 3.9,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 3.9, gamesPlayed: 15, gamesMissed: 2, missedReason: "Healthy scratch, 2 games", weekly: [4.1, 3.2, 4.1, 3.5, 4.8, 6.0, 4.6, 3.2, 2.4, 3.9, 2.0, 4.3, 4.8, 2.7, 4.9] },
      { year: 2025, ppg: 3.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [2.1, 5.4, 3.0, 7.8, 1.5, 4.2, 6.6, 0.0, 3.3, 8.1, 2.9, 5.0, 1.8, 4.6, 6.2, 0.0, 3.7] },
    ],
  },
  "samaje-perine-rb": {
    ppg: 3.0,
    seasons: [
      { year: 2023, ppg: 3.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [2.6, 3.6, 3.3, 3.6, 4.8, 3.5, 5.1, 3.7, 2.9, 4.2, 4.0, 3.1, 6.4, 2.7, 2.5, 4.1, 1.1] },
      { year: 2024, ppg: 3.1, gamesPlayed: 16, gamesMissed: 1, missedReason: "Concussion, 1 game", weekly: [2.2, 2.6, 3.1, 3.8, 2.5, 3.6, 3.4, 3.2, 3.1, 1.7, 3.4, 5.8, 2.7, 1.9, 2.6, 4.0] },
      { year: 2025, ppg: 3.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [1.8, 4.2, 2.5, 0.0, 5.6, 3.3, 1.1, 6.0, 2.8, 4.5, 0.0, 3.9, 2.2, 5.3, 1.6, 4.0, 2.7] },
    ],
  },
  "dylan-sampson-rb": {
    ppg: 3.5,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 3.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Healthy scratch, Week 1", weekly: [0.0, 1.5, 3.2, 5.0, 2.1, 6.4, 0.0, 4.3, 7.1, 2.8, 3.6, 5.5, 1.2, 4.0, 6.8, 2.4] },
    ],
  },
  "jaydon-blue-rb": {
    ppg: 3.4,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 3.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [1.2, 4.5, 2.8, 6.3, 0.0, 3.9, 5.6, 2.1, 7.4, 1.8, 4.2, 0.0, 3.3, 6.0, 2.5, 4.8, 1.6] },
    ],
  },
  "isiah-pacheco-rb": {
    ppg: 4.1,
    seasons: [
      { year: 2023, ppg: 6.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Shoulder stinger, 1 game", weekly: [6.6, 4.7, 8.7, 9.4, 3.4, 5.7, 5.2, 10.0, 8.7, 3.9, 8.1, 5.3, 5.5, 9.8, 4.4, 9.4] },
      { year: 2024, ppg: 4.0, gamesPlayed: 9, gamesMissed: 8, missedReason: "Fractured fibula, 8 games", weekly: [2.8, 4.6, 3.0, 3.7, 4.2, 4.9, 6.2, 3.7, 2.9] },
      { year: 2025, ppg: 4.1, gamesPlayed: 15, gamesMissed: 2, missedReason: "Knee soreness, 2 games", weekly: [5.5, 3.2, 7.8, 2.1, 0.0, 4.6, 6.3, 1.9, 8.5, 3.4, 5.0, 2.6, 0.0, 4.1, 6.7] },
    ],
  },
  "marshawn-lloyd-rb": {
    ppg: 3.3,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 2.4, gamesPlayed: 10, gamesMissed: 7, missedReason: "Hamstring injury, 7 games", weekly: [2.0, 3.5, 3.7, 2.8, 1.6, 2.2, 2.5, 2.2, 1.5, 2.0] },
      { year: 2025, ppg: 3.3, gamesPlayed: 16, gamesMissed: 1, missedReason: "Rest, Week 18", weekly: [3.1, 1.5, 4.8, 0.0, 6.2, 2.7, 5.0, 1.1, 7.3, 3.6, 0.0, 4.4, 2.0, 5.7, 1.8, 3.9] },
    ],
  },
  "woody-marks-rb": {
    ppg: 3.4,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 3.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [2.5, 4.8, 1.2, 6.6, 3.3, 0.0, 5.5, 2.9, 7.0, 1.6, 4.1, 3.7, 0.0, 5.9, 2.2, 4.6, 1.9] },
    ],
  },
  "dj-giddens-rb": {
    ppg: 3.3,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 3.3, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, 1 game", weekly: [1.9, 3.5, 5.2, 0.0, 4.0, 6.8, 2.3, 1.0, 5.6, 3.1, 7.4, 0.0, 2.7, 4.5, 1.5, 3.9] },
    ],
  },
  "jaylen-wright-rb": {
    ppg: 3.5,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 3.0, gamesPlayed: 14, gamesMissed: 3, missedReason: "Healthy scratch, 3 games", weekly: [1.0, 4.1, 3.8, 1.7, 1.2, 3.3, 3.8, 2.8, 3.3, 2.2, 3.9, 4.2, 2.7, 4.0] },
      { year: 2025, ppg: 3.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [2.2, 4.6, 1.8, 6.1, 3.4, 0.0, 5.3, 2.9, 7.6, 1.5, 4.0, 6.4, 0.0, 3.7, 2.1, 5.8, 1.3] },
    ],
  },
  "devin-singletary-rb": {
    ppg: 4.4,
    seasons: [
      { year: 2023, ppg: 6.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [13.0, 5.7, 7.4, 8.1, 3.7, 4.0, 6.9, 8.3, 5.1, 9.2, 6.8, 4.2, 8.9, 4.1, 5.5, 5.3, 4.3] },
      { year: 2024, ppg: 5.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Illness, 1 game", weekly: [6.3, 5.1, 9.5, 7.5, 9.5, 7.0, 6.3, 3.7, 1.8, 2.4, 7.4, 5.9, 4.7, 4.1, 5.7, 5.9] },
      { year: 2025, ppg: 4.4, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring tweak, 2 games", weekly: [4.5, 7.2, 3.1, 5.8, 2.4, 8.0, 1.7, 6.3, 3.9, 0.0, 5.1, 4.4, 7.5, 2.2, 3.6] },
    ],
  },
  "braelon-allen-rb": {
    ppg: 3.9,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 3.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Healthy scratch, 1 game", weekly: [3.2, 2.6, 2.6, 5.9, 4.0, 2.4, 4.8, 2.8, 5.7, 6.3, 1.9, 3.2, 2.7, 3.3, 5.6, 3.8] },
      { year: 2025, ppg: 3.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [3.3, 5.6, 1.9, 4.2, 6.8, 2.5, 0.0, 5.0, 3.7, 7.1, 1.4, 4.6, 2.8, 6.3, 3.0, 5.5, 2.0] },
    ],
  },
  "tank-bigsby-rb": {
    ppg: 3.7,
    seasons: [
      { year: 2023, ppg: 3.2, gamesPlayed: 15, gamesMissed: 2, missedReason: "Healthy scratch, 2 games", weekly: [4.2, 3.4, 2.1, 3.8, 3.3, 2.5, 3.8, 4.2, 3.0, 2.8, 3.4, 1.5, 4.2, 3.3, 2.5] },
      { year: 2024, ppg: 4.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.0, 4.7, 4.3, 3.0, 2.9, 3.3, 5.9, 1.7, 6.4, 5.6, 6.5, 4.4, 2.6, 2.8, 6.5, 6.2, 5.7] },
      { year: 2025, ppg: 3.7, gamesPlayed: 16, gamesMissed: 1, missedReason: "Rib injury, 1 game", weekly: [2.6, 5.1, 3.8, 0.0, 6.4, 2.0, 4.7, 7.2, 1.5, 3.3, 5.9, 2.2, 0.0, 4.1, 6.6, 3.0] },
    ],
  },
  "kaleb-johnson-rb": {
    ppg: 3.7,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 3.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [1.5, 3.8, 6.2, 2.4, 4.9, 0.0, 7.5, 3.1, 5.6, 1.8, 4.3, 6.9, 2.7, 0.0, 5.2, 3.4, 4.0] },
    ],
  },
  "zach-charbonnet-rb": {
    ppg: 4.2,
    seasons: [
      { year: 2023, ppg: 4.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.9, 4.0, 3.8, 4.6, 5.2, 4.7, 4.1, 2.6, 2.6, 3.3, 3.0, 3.0, 4.9, 4.3, 3.9, 4.6, 4.5] },
      { year: 2024, ppg: 5.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Knee sprain, 2 games", weekly: [7.4, 5.5, 6.3, 6.5, 5.9, 4.9, 6.3, 6.7, 4.7, 3.0, 5.6, 4.7, 6.4, 3.5, 5.1] },
      { year: 2025, ppg: 4.2, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hip pointer, 1 game", weekly: [3.6, 6.1, 4.4, 2.0, 7.3, 5.0, 1.7, 4.8, 6.6, 3.1, 0.0, 5.4, 2.6, 7.0, 3.9, 4.2] },
    ],
  },
  "isaac-guerendo-rb": {
    ppg: 3.5,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 2.8, gamesPlayed: 12, gamesMissed: 5, missedReason: "Hamstring injury, 5 games", weekly: [1.6, 2.9, 3.4, 4.8, 2.4, 3.3, 2.9, 1.4, 1.8, 2.7, 2.7, 3.7] },
      { year: 2025, ppg: 3.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [2.4, 4.7, 1.6, 5.9, 3.2, 0.0, 6.5, 2.1, 4.4, 7.0, 1.9, 3.6, 5.3, 2.7, 0.0, 4.9, 3.0] },
    ],
  },
  "tyjae-spears-rb": {
    ppg: 4.3,
    seasons: [
      { year: 2023, ppg: 4.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [3.3, 3.4, 3.8, 6.1, 3.4, 3.9, 4.7, 3.1, 3.1, 7.9, 7.1, 6.0, 6.5, 3.8, 6.6, 4.8, 5.8] },
      { year: 2024, ppg: 5.7, gamesPlayed: 14, gamesMissed: 3, missedReason: "Ankle sprain, 3 games", weekly: [6.1, 3.2, 6.4, 7.2, 5.2, 5.0, 8.9, 6.3, 3.9, 5.5, 4.1, 4.9, 5.3, 7.8] },
      { year: 2025, ppg: 4.3, gamesPlayed: 16, gamesMissed: 1, missedReason: "Shoulder injury, 1 game", weekly: [4.0, 6.6, 3.3, 7.8, 2.5, 5.1, 1.8, 6.0, 4.4, 0.0, 3.7, 5.9, 2.2, 7.2, 3.0, 4.6] },
    ],
  },
  "tyler-goodson-rb": {
    ppg: 2.4,
    seasons: [
      { year: 2023, ppg: 2.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Healthy scratch, 1 game", weekly: [3.6, 4.1, 2.7, 2.6, 4.2, 1.8, 3.7, 2.0, 2.3, 2.1, 4.3, 1.6, 4.2, 1.9, 1.9, 3.4] },
      { year: 2024, ppg: 2.2, gamesPlayed: 13, gamesMissed: 4, missedReason: "Buried on depth chart, healthy scratch", weekly: [2.8, 2.6, 1.6, 2.6, 1.1, 1.4, 1.6, 2.7, 2.6, 2.3, 2.5, 2.0, 2.8] },
      { year: 2025, ppg: 2.4, gamesPlayed: 15, gamesMissed: 2, missedReason: "Groin injury, 2 games", weekly: [1.5, 3.2, 0.0, 4.6, 2.1, 0.8, 5.0, 1.9, 3.5, 0.0, 2.7, 4.1, 1.2, 3.8, 2.0] },
    ],
  },
  "jonah-coleman-rb": {
    ppg: 2.1,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 2.1, gamesPlayed: 14, gamesMissed: 3, missedReason: "Healthy scratch, 3 games", weekly: [1.0, 2.5, 0.0, 3.8, 1.6, 4.2, 0.5, 2.9, 1.3, 3.5, 0.0, 2.0, 4.6, 1.8] },
    ],
  },
  "sione-vaki-rb": {
    ppg: 2.3,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 2.0, gamesPlayed: 15, gamesMissed: 2, missedReason: "Healthy scratch, 2 games", weekly: [1.1, 2.4, 1.5, 2.7, 2.4, 1.4, 1.6, 2.7, 1.7, 3.1, 2.2, 1.9, 1.4, 2.8, 1.1] },
      { year: 2025, ppg: 2.3, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hamstring tweak, 1 game", weekly: [1.8, 3.4, 0.6, 4.0, 2.2, 0.0, 3.7, 1.4, 2.9, 4.3, 0.9, 2.5, 3.1, 0.0, 1.6, 3.9] },
    ],
  },
  "emari-demercado-rb": {
    ppg: 2.2,
    seasons: [
      { year: 2023, ppg: 1.8, gamesPlayed: 13, gamesMissed: 4, missedReason: "Practice squad call-ups, 4 games", weekly: [2.2, 2.0, 1.6, 1.2, 1.2, 2.2, 1.1, 2.7, 2.9, 2.0, 1.5, 1.5, 1.3] },
      { year: 2024, ppg: 2.6, gamesPlayed: 16, gamesMissed: 1, missedReason: "Healthy scratch, 1 game", weekly: [2.7, 3.3, 3.0, 3.9, 1.6, 1.2, 2.6, 1.2, 1.7, 3.2, 2.7, 3.3, 3.8, 3.8, 1.9, 1.7] },
      { year: 2025, ppg: 2.2, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, 2 games", weekly: [1.2, 3.0, 0.5, 4.4, 2.1, 0.0, 3.6, 1.7, 2.9, 4.0, 0.8, 2.4, 3.3, 1.0, 2.6] },
    ],
  },
  "keaton-mitchell-rb": {
    ppg: 3.0,
    seasons: [
      { year: 2023, ppg: 6.5, gamesPlayed: 8, gamesMissed: 9, missedReason: "Torn ACL, 9 games", weekly: [8.1, 6.3, 7.4, 4.5, 9.5, 4.1, 5.3, 6.8] },
      { year: 2024, ppg: 3.0, gamesPlayed: 10, gamesMissed: 7, missedReason: "Recovering from ACL, eased back in", weekly: [2.5, 3.2, 2.7, 4.6, 1.9, 3.7, 4.2, 2.3, 2.7, 2.2] },
      { year: 2025, ppg: 3.0, gamesPlayed: 14, gamesMissed: 3, missedReason: "Knee soreness, 3 games", weekly: [2.5, 4.8, 1.2, 5.5, 3.0, 0.0, 4.2, 2.1, 6.0, 1.5, 3.6, 0.0, 2.8, 4.4] },
    ],
  },
  "jarquez-hunter-rb": {
    ppg: 2.4,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 2.4, gamesPlayed: 15, gamesMissed: 2, missedReason: "Healthy scratch, 2 games", weekly: [1.4, 3.6, 0.0, 4.5, 2.0, 3.1, 0.7, 5.2, 1.9, 2.6, 4.0, 0.0, 3.3, 1.5, 2.2] },
    ],
  },
  "dylan-laube-rb": {
    ppg: 1.9,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 1.5, gamesPlayed: 11, gamesMissed: 6, missedReason: "Practice squad most of season", weekly: [1.1, 1.3, 1.0, 1.2, 1.4, 1.8, 0.6, 2.8, 3.3, 0.9, 1.1] },
      { year: 2025, ppg: 1.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Healthy scratch, 1 game", weekly: [1.0, 2.8, 0.4, 3.5, 1.7, 0.0, 2.9, 1.2, 4.0, 0.8, 2.3, 3.6, 1.5, 0.0, 2.6, 1.9] },
    ],
  },
  "devin-neal-rb": {
    ppg: 2.0,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 2.0, gamesPlayed: 13, gamesMissed: 4, missedReason: "Practice squad call-ups, 4 games", weekly: [0.8, 2.4, 1.1, 3.5, 0.0, 2.0, 4.2, 1.5, 2.7, 0.5, 3.0, 1.8, 2.2] },
    ],
  },
  "sean-tucker-rb": {
    ppg: 2.1,
    seasons: [
      { year: 2023, ppg: 1.2, gamesPlayed: 9, gamesMissed: 8, missedReason: "Healthy scratch, buried on depth chart", weekly: [1.4, 1.4, 1.4, 1.2, 1.1, 1.1, 1.2, 0.9, 1.1] },
      { year: 2024, ppg: 2.3, gamesPlayed: 14, gamesMissed: 3, missedReason: "Healthy scratch, 3 games", weekly: [1.8, 2.3, 3.1, 3.2, 3.1, 2.7, 3.3, 1.7, 3.9, 2.1, 0.7, 1.3, 1.6, 1.4] },
      { year: 2025, ppg: 2.1, gamesPlayed: 16, gamesMissed: 1, missedReason: "Illness, 1 game", weekly: [1.6, 3.0, 0.5, 4.1, 2.2, 0.0, 3.4, 1.0, 2.8, 4.5, 0.8, 2.1, 3.6, 1.4, 0.0, 2.5] },
    ],
  },
  "craig-reynolds-rb": {
    ppg: 1.6,
    seasons: [
      { year: 2023, ppg: 2.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [1.8, 1.4, 1.7, 1.8, 1.1, 2.4, 2.1, 1.4, 2.5, 1.1, 2.4, 2.2, 3.5, 2.4, 2.4, 1.1, 2.7] },
      { year: 2024, ppg: 1.6, gamesPlayed: 15, gamesMissed: 2, missedReason: "Healthy scratch, 2 games", weekly: [1.1, 0.9, 2.0, 1.1, 2.0, 1.8, 1.5, 1.0, 2.7, 1.4, 1.5, 2.0, 2.0, 1.1, 1.9] },
      { year: 2025, ppg: 1.6, gamesPlayed: 16, gamesMissed: 1, missedReason: "Healthy scratch, 1 game", weekly: [0.5, 2.2, 1.0, 3.1, 0.0, 1.8, 2.6, 0.8, 3.4, 1.2, 0.0, 2.0, 1.5, 2.8, 0.6, 1.9] },
    ],
  },
  "tyler-allgeier-rb": {
    ppg: 2.5,
    seasons: [
      { year: 2023, ppg: 4.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.1, 4.7, 1.5, 6.1, 4.8, 2.0, 4.4, 5.1, 5.6, 5.3, 5.1, 2.7, 2.2, 5.0, 3.7, 6.2, 2.9] },
      { year: 2024, ppg: 3.0, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, 1 game", weekly: [4.0, 4.5, 2.5, 3.0, 4.0, 3.5, 2.8, 3.8, 1.9, 2.2, 3.0, 3.1, 2.3, 3.5, 2.1, 1.8] },
      { year: 2025, ppg: 2.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Healthy scratch, 2 games", weekly: [2.0, 3.8, 1.2, 4.5, 2.6, 0.0, 3.3, 1.8, 4.0, 2.4, 0.6, 3.6, 1.5, 4.2, 2.1] },
    ],
  },
  "ronnie-rivers-rb": {
    ppg: 1.7,
    seasons: [
      { year: 2023, ppg: 1.4, gamesPlayed: 14, gamesMissed: 3, missedReason: "Healthy scratch, 3 games", weekly: [1.1, 0.9, 1.0, 1.2, 1.4, 1.3, 1.7, 1.3, 1.7, 1.2, 0.9, 2.0, 2.4, 1.5] },
      { year: 2024, ppg: 1.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Healthy scratch, 1 game", weekly: [1.3, 1.3, 1.7, 2.2, 1.4, 1.9, 2.1, 2.3, 1.2, 3.2, 1.9, 1.0, 2.6, 1.7, 1.8, 1.2] },
      { year: 2025, ppg: 1.7, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hamstring injury, 4 games", weekly: [0.8, 2.4, 0.0, 3.0, 1.2, 2.6, 0.5, 1.9, 3.3, 0.0, 2.1, 1.5, 2.8] },
    ],
  },
  "kendre-miller-rb": {
    ppg: 2.1,
    seasons: [
      { year: 2023, ppg: 2.2, gamesPlayed: 10, gamesMissed: 7, missedReason: "Hamstring and turf toe injuries, 7 games", weekly: [2.6, 2.6, 2.9, 1.9, 1.2, 2.8, 1.8, 2.4, 1.2, 2.6] },
      { year: 2024, ppg: 2.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Healthy scratch, 3 games", weekly: [1.3, 2.8, 1.9, 2.4, 2.7, 2.1, 3.9, 2.6, 3.0, 3.2, 3.9, 3.3, 2.9, 3.2] },
      { year: 2025, ppg: 2.1, gamesPlayed: 16, gamesMissed: 1, missedReason: "Groin injury, 1 game", weekly: [1.5, 3.2, 0.8, 4.0, 2.1, 0.0, 3.6, 1.2, 2.9, 4.4, 0.6, 2.4, 3.1, 1.8, 0.0, 2.6] },
    ],
  },
  "eric-gray-rb": {
    ppg: 1.6,
    seasons: [
      { year: 2023, ppg: 1.0, gamesPlayed: 12, gamesMissed: 5, missedReason: "Healthy scratch, 5 games", weekly: [0.6, 0.6, 0.7, 1.1, 1.4, 0.6, 1.1, 1.1, 0.9, 1.0, 1.8, 1.1] },
      { year: 2024, ppg: 1.9, gamesPlayed: 15, gamesMissed: 2, missedReason: "Healthy scratch, 2 games", weekly: [1.4, 2.1, 1.5, 2.5, 2.0, 1.2, 1.8, 1.2, 0.7, 2.6, 2.7, 2.4, 2.0, 2.0, 2.4] },
      { year: 2025, ppg: 1.6, gamesPlayed: 14, gamesMissed: 3, missedReason: "Healthy scratch, 3 games", weekly: [0.6, 2.0, 1.2, 3.1, 0.0, 1.8, 2.5, 0.4, 2.9, 1.5, 0.0, 2.2, 1.0, 2.6] },
    ],
  },
  "chase-edmonds-rb": {
    ppg: 1.8,
    seasons: [
      { year: 2023, ppg: 2.5, gamesPlayed: 13, gamesMissed: 4, missedReason: "Knee injury, 4 games", weekly: [2.8, 1.3, 3.7, 1.8, 2.4, 2.4, 2.9, 1.8, 3.3, 2.5, 2.7, 2.6, 2.3] },
      { year: 2024, ppg: 1.8, gamesPlayed: 12, gamesMissed: 5, missedReason: "Healthy scratch, 5 games", weekly: [1.1, 3.1, 1.2, 1.8, 1.1, 2.0, 2.3, 1.7, 1.8, 1.9, 2.1, 1.5] },
      { year: 2025, ppg: 1.8, gamesPlayed: 10, gamesMissed: 7, missedReason: "Hip injury, 7 games", weekly: [1.2, 2.8, 0.5, 3.4, 1.6, 0.0, 2.2, 1.9, 3.0, 1.0] },
    ],
  },
  "cordarrelle-patterson-rb": {
    ppg: 2.4,
    seasons: [
      { year: 2023, ppg: 3.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Knee soreness, 1 game", weekly: [6.9, 4.7, 2.1, 3.3, 1.1, 4.7, 5.1, 2.9, 3.0, 2.8, 3.0, 3.3, 3.0, 4.4, 2.5, 3.2] },
      { year: 2024, ppg: 2.6, gamesPlayed: 15, gamesMissed: 2, missedReason: "Healthy scratch, 2 games", weekly: [3.6, 2.3, 3.3, 2.3, 3.9, 3.9, 3.1, 2.7, 2.1, 1.9, 1.1, 2.2, 3.3, 1.7, 1.6] },
      { year: 2025, ppg: 2.4, gamesPlayed: 14, gamesMissed: 3, missedReason: "Age-related rest, 3 games", weekly: [2.0, 3.6, 1.4, 4.2, 2.5, 0.0, 3.1, 1.8, 2.9, 4.0, 0.8, 2.3, 3.4, 1.5] },
    ],
  },
  "jaleel-mclaughlin-rb": {
    ppg: 1.7,
    seasons: [
      { year: 2023, ppg: 1.5, gamesPlayed: 11, gamesMissed: 6, missedReason: "Practice squad, 6 games", weekly: [1.5, 1.1, 1.6, 0.9, 1.7, 1.8, 2.0, 1.1, 1.7, 1.6, 1.5] },
      { year: 2024, ppg: 2.1, gamesPlayed: 15, gamesMissed: 2, missedReason: "Healthy scratch, 2 games", weekly: [1.3, 2.0, 1.3, 3.1, 1.8, 0.7, 1.7, 2.1, 2.8, 2.9, 1.7, 3.1, 1.5, 1.1, 4.4] },
      { year: 2025, ppg: 1.7, gamesPlayed: 16, gamesMissed: 1, missedReason: "Healthy scratch, 1 game", weekly: [1.0, 2.6, 0.4, 3.2, 1.5, 0.0, 2.8, 1.1, 2.4, 3.6, 0.6, 1.9, 2.2, 0.0, 2.7, 1.4] },
    ],
  },
  "trey-benson-rb": {
    ppg: 2.2,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 2.4, gamesPlayed: 13, gamesMissed: 4, missedReason: "Knee injury, 4 games", weekly: [2.4, 2.9, 3.1, 1.3, 3.1, 1.5, 1.8, 2.7, 0.9, 2.7, 3.2, 4.2, 1.4] },
      { year: 2025, ppg: 2.2, gamesPlayed: 15, gamesMissed: 2, missedReason: "Healthy scratch, 2 games", weekly: [1.6, 3.4, 0.8, 4.2, 2.0, 0.0, 3.0, 1.2, 2.6, 4.5, 0.5, 2.2, 3.6, 1.0, 2.4] },
    ],
  },
  "michael-carter-rb": {
    ppg: 1.8,
    seasons: [
      { year: 2023, ppg: 2.6, gamesPlayed: 16, gamesMissed: 1, missedReason: "Healthy scratch, 1 game", weekly: [2.7, 3.5, 3.3, 2.6, 2.9, 4.1, 2.2, 2.2, 2.7, 1.1, 1.2, 2.7, 2.1, 2.5, 3.7, 2.1] },
      { year: 2024, ppg: 1.9, gamesPlayed: 14, gamesMissed: 3, missedReason: "Healthy scratch, 3 games", weekly: [2.3, 2.8, 2.3, 0.7, 2.8, 0.8, 1.4, 1.2, 1.8, 2.4, 1.7, 2.6, 2.7, 1.1] },
      { year: 2025, ppg: 1.8, gamesPlayed: 13, gamesMissed: 4, missedReason: "Concussion and healthy scratches", weekly: [1.4, 2.8, 0.6, 3.5, 1.8, 0.0, 2.4, 1.1, 3.0, 2.2, 0.4, 1.6, 2.9] },
    ],
  },
  "dameon-pierce-rb": {
    ppg: 2.4,
    seasons: [
      { year: 2023, ppg: 4.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [2.3, 3.9, 4.8, 2.9, 3.6, 4.5, 5.6, 5.9, 6.2, 4.1, 4.5, 6.9, 5.0, 4.8, 4.1, 1.6, 5.8] },
      { year: 2024, ppg: 2.8, gamesPlayed: 15, gamesMissed: 2, missedReason: "Healthy scratch, 2 games", weekly: [3.3, 2.8, 4.8, 2.2, 2.1, 2.2, 2.0, 3.4, 2.4, 2.8, 2.0, 2.4, 3.5, 4.1, 2.0] },
      { year: 2025, ppg: 2.4, gamesPlayed: 14, gamesMissed: 3, missedReason: "Healthy scratch, 3 games", weekly: [2.0, 3.6, 1.2, 4.4, 2.5, 0.0, 3.2, 1.8, 2.9, 4.0, 0.6, 2.2, 3.5, 1.4] },
    ],
  },
  "elijah-mitchell-rb": {
    ppg: 2.6,
    seasons: [
      { year: 2023, ppg: 3.8, gamesPlayed: 10, gamesMissed: 7, missedReason: "Knee injury, 7 games", weekly: [1.3, 3.1, 5.2, 4.4, 2.2, 3.4, 3.0, 5.2, 4.9, 5.3] },
      { year: 2024, ppg: 3.0, gamesPlayed: 9, gamesMissed: 8, missedReason: "Hamstring injury, 8 games", weekly: [2.8, 3.6, 3.4, 2.0, 3.1, 2.4, 1.9, 2.7, 5.1] },
      { year: 2025, ppg: 2.6, gamesPlayed: 11, gamesMissed: 6, missedReason: "Ankle injury, 6 games", weekly: [2.2, 4.0, 1.5, 3.6, 0.0, 2.8, 4.4, 1.0, 3.2, 2.6, 3.8] },
    ],
  },
  "patrick-taylor-rb": {
    ppg: 1.4,
    seasons: [
      { year: 2023, ppg: 1.6, gamesPlayed: 15, gamesMissed: 2, missedReason: "Healthy scratch, 2 games", weekly: [1.8, 1.1, 2.1, 0.8, 1.7, 1.8, 1.9, 2.0, 1.4, 2.0, 1.2, 2.0, 1.2, 1.3, 1.7] },
      { year: 2024, ppg: 1.3, gamesPlayed: 14, gamesMissed: 3, missedReason: "Healthy scratch, 3 games", weekly: [1.4, 1.3, 1.8, 1.7, 1.2, 1.1, 1.4, 1.4, 0.8, 0.7, 1.1, 1.4, 1.5, 1.4] },
      { year: 2025, ppg: 1.4, gamesPlayed: 16, gamesMissed: 1, missedReason: "Healthy scratch, 1 game", weekly: [0.8, 2.0, 0.4, 2.6, 1.2, 0.0, 1.9, 0.6, 2.4, 1.5, 0.0, 2.2, 1.0, 2.8, 0.5, 1.7] },
    ],
  },
  "trey-sermon-rb": {
    ppg: 1.7,
    seasons: [
      { year: 2023, ppg: 1.9, gamesPlayed: 13, gamesMissed: 4, missedReason: "Healthy scratch, 4 games", weekly: [1.6, 2.2, 2.4, 1.2, 1.9, 1.2, 2.3, 2.1, 1.9, 1.6, 2.2, 1.9, 2.2] },
      { year: 2024, ppg: 1.5, gamesPlayed: 12, gamesMissed: 5, missedReason: "Practice squad call-ups, 5 games", weekly: [1.2, 2.2, 1.2, 1.0, 1.7, 1.5, 2.0, 1.8, 1.4, 0.5, 1.8, 1.7] },
      { year: 2025, ppg: 1.7, gamesPlayed: 14, gamesMissed: 3, missedReason: "Healthy scratch, 3 games", weekly: [1.0, 2.4, 0.5, 3.0, 1.6, 0.0, 2.2, 1.2, 2.8, 0.8, 1.9, 3.2, 0.6, 2.0] },
    ],
  },
  "evan-hull-rb": {
    ppg: 2.8,
    seasons: [
      { year: 2023, ppg: 3.2, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, 3 games", weekly: [4.9, 3.4, 4.0, 2.1, 3.5, 4.1, 2.3, 1.2, 4.1, 4.0, 4.2, 2.0, 2.1, 2.9] },
      { year: 2024, ppg: 4.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.9, 2.0, 4.2, 3.7, 4.6, 4.5, 4.6, 2.1, 2.7, 4.8, 4.9, 4.5, 2.3, 4.7, 4.0, 4.5, 6.7] },
      { year: 2025, ppg: 2.8, gamesPlayed: 12, gamesMissed: 5, missedReason: "Knee injury, 5 games", weekly: [0.0, 4.5, 1.2, 6.8, 2.3, 0.0, 3.1, 5.4, 1.8, 0.9, 2.6, 4.7] },
    ],
  },
  "ty-johnson-rb": {
    ppg: 1.9,
    seasons: [
      { year: 2023, ppg: 2.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [2.2, 3.5, 2.7, 3.5, 2.2, 2.4, 2.8, 3.6, 4.9, 1.2, 1.6, 3.5, 0.9, 1.6, 2.7, 3.3, 1.6] },
      { year: 2024, ppg: 3.4, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, 1 game", weekly: [5.7, 2.5, 2.5, 2.6, 2.6, 3.9, 3.5, 2.2, 4.5, 4.2, 2.1, 5.0, 2.5, 3.9, 2.6, 4.1] },
      { year: 2025, ppg: 1.9, gamesPlayed: 15, gamesMissed: 2, missedReason: "Healthy scratch, 2 games", weekly: [0.0, 3.2, 1.1, 0.0, 2.8, 1.4, 0.6, 4.1, 0.0, 2.3, 1.9, 3.6, 0.8, 2.5, 4.2] },
    ],
  },
  "frank-gore-jr-rb": {
    ppg: 2.5,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 2.0, gamesPlayed: 13, gamesMissed: 4, missedReason: "Practice squad call-ups, 4 games", weekly: [1.8, 1.8, 1.9, 1.7, 1.2, 2.4, 2.4, 2.1, 1.3, 1.9, 1.9, 2.6, 3.0] },
      { year: 2025, ppg: 2.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Illness, 1 game", weekly: [0.0, 2.4, 3.8, 1.2, 4.6, 0.8, 2.9, 5.1, 1.6, 3.3, 0.0, 4.2, 2.7, 1.9, 3.5, 2.2] },
    ],
  },
  "zamir-white-rb": {
    ppg: 2.9,
    seasons: [
      { year: 2023, ppg: 3.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.6, 4.8, 3.4, 5.2, 1.4, 3.6, 3.1, 3.5, 6.2, 1.8, 3.1, 5.6, 5.1, 2.3, 2.8, 4.8, 2.3] },
      { year: 2024, ppg: 4.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle injury, 2 games", weekly: [3.4, 3.6, 5.6, 3.5, 2.9, 5.0, 4.4, 3.1, 3.3, 5.2, 4.7, 3.9, 6.8, 5.4, 6.7] },
      { year: 2025, ppg: 2.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [1.2, 4.5, 2.8, 0.6, 5.1, 3.3, 2.0, 4.8, 1.5, 3.6, 0.9, 5.4, 2.2, 3.8, 1.1, 4.0, 2.9] },
    ],
  },
  "ameer-abdullah-rb": {
    ppg: 1.6,
    seasons: [
      { year: 2023, ppg: 2.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [1.6, 3.1, 2.8, 1.8, 1.7, 2.6, 3.6, 3.5, 1.6, 2.0, 2.7, 1.0, 1.2, 4.2, 2.8, 2.2, 2.4] },
      { year: 2024, ppg: 2.1, gamesPlayed: 16, gamesMissed: 1, missedReason: "Knee soreness, 1 game", weekly: [1.2, 1.8, 3.3, 2.3, 2.6, 2.0, 1.7, 1.7, 1.8, 3.7, 2.2, 2.6, 1.8, 1.1, 2.7, 1.1] },
      { year: 2025, ppg: 1.6, gamesPlayed: 14, gamesMissed: 3, missedReason: "Healthy scratch, 3 games", weekly: [0.0, 2.8, 1.4, 0.6, 3.2, 0.9, 1.8, 0.0, 2.4, 1.1, 3.6, 0.8, 2.0, 1.5] },
    ],
  },
  "khalil-herbert-rb": {
    ppg: 2.8,
    seasons: [
      { year: 2023, ppg: 4.6, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hip pointer, 4 games", weekly: [1.3, 5.9, 4.0, 5.7, 6.1, 6.0, 1.6, 8.1, 1.9, 5.9, 4.0, 4.3, 5.0] },
      { year: 2024, ppg: 3.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Illness, 1 game", weekly: [4.0, 4.0, 5.0, 3.5, 2.2, 3.0, 2.6, 2.5, 6.5, 3.8, 5.0, 4.6, 4.9, 2.3, 5.3, 3.2] },
      { year: 2025, ppg: 2.8, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ribs injury, 2 games", weekly: [1.5, 4.2, 2.8, 0.6, 5.0, 3.4, 1.2, 4.6, 2.0, 3.8, 0.9, 5.5, 2.4, 3.1, 1.7] },
    ],
  },
  "jerome-ford-rb": {
    ppg: 2.0,
    seasons: [
      { year: 2023, ppg: 3.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.4, 3.6, 4.4, 4.7, 2.7, 4.8, 4.1, 1.2, 3.9, 4.3, 3.3, 2.7, 2.2, 4.9, 2.9, 2.2, 3.2] },
      { year: 2024, ppg: 2.9, gamesPlayed: 14, gamesMissed: 3, missedReason: "Shoulder injury, 3 games", weekly: [3.3, 2.2, 4.0, 1.9, 3.4, 3.3, 3.2, 1.7, 3.8, 3.6, 1.7, 3.1, 2.5, 2.9] },
      { year: 2025, ppg: 2.0, gamesPlayed: 16, gamesMissed: 1, missedReason: "Concussion, 1 game", weekly: [0.6, 3.2, 1.8, 0.0, 2.6, 4.0, 1.1, 2.9, 0.5, 3.6, 1.4, 2.2, 0.0, 3.8, 1.9, 2.5] },
    ],
  },
  "will-shipley-rb": {
    ppg: 2.9,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 2.6, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, 2 games", weekly: [1.8, 3.2, 3.5, 2.0, 1.7, 2.7, 3.0, 2.9, 2.7, 3.1, 3.0, 2.2, 3.1, 1.8, 2.3] },
      { year: 2025, ppg: 2.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hamstring tweak, 1 game", weekly: [1.2, 4.0, 2.5, 0.8, 5.2, 3.1, 1.6, 4.4, 2.0, 3.8, 0.9, 5.0, 2.7, 4.6, 1.5, 3.3] },
    ],
  },
  "kendall-milton-rb": {
    ppg: 1.7,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 1.4, gamesPlayed: 10, gamesMissed: 7, missedReason: "Practice squad most of season", weekly: [1.6, 0.9, 1.8, 1.6, 0.7, 1.6, 1.0, 1.9, 1.5, 1.4] },
      { year: 2025, ppg: 1.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [0.0, 1.8, 2.4, 0.5, 3.2, 1.1, 0.0, 2.8, 1.6, 3.5, 0.8, 2.0, 0.0, 3.1, 1.4, 2.6, 1.9] },
    ],
  },
  "kimani-vidal-rb": {
    ppg: 2.4,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 2.3, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hamstring strain, 1 game", weekly: [1.9, 1.9, 2.7, 3.0, 2.3, 2.2, 3.1, 2.1, 1.7, 1.8, 1.7, 2.9, 2.9, 1.1, 2.8, 2.7] },
      { year: 2025, ppg: 2.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [1.0, 3.6, 2.2, 0.4, 4.5, 2.8, 1.3, 3.9, 0.7, 4.1, 2.5, 1.8, 3.3, 0.9, 4.7, 2.0, 1.6] },
    ],
  },
  "hassan-haskins-rb": {
    ppg: 1.2,
    seasons: [
      { year: 2023, ppg: 1.9, gamesPlayed: 15, gamesMissed: 2, missedReason: "Healthy scratch, 2 games", weekly: [1.8, 1.9, 1.0, 1.5, 1.9, 2.1, 1.8, 2.0, 2.4, 2.0, 1.7, 1.5, 2.1, 0.9, 3.9] },
      { year: 2024, ppg: 1.5, gamesPlayed: 12, gamesMissed: 5, missedReason: "Practice squad stint, 5 games", weekly: [1.6, 1.4, 1.2, 1.0, 1.5, 1.5, 2.0, 1.5, 0.9, 2.8, 1.6, 1.0] },
      { year: 2025, ppg: 1.2, gamesPlayed: 13, gamesMissed: 4, missedReason: "Healthy scratch, 4 games", weekly: [0.0, 1.8, 0.6, 2.4, 0.0, 1.5, 2.0, 0.8, 1.1, 0.0, 2.6, 1.3, 1.7] },
    ],
  },
  "jeff-wilson-jr-rb": {
    ppg: 2.3,
    seasons: [
      { year: 2023, ppg: 3.6, gamesPlayed: 13, gamesMissed: 4, missedReason: "Knee injury, 4 games", weekly: [4.1, 4.3, 1.8, 4.3, 3.2, 4.5, 4.3, 4.2, 3.0, 2.7, 3.3, 2.9, 4.2] },
      { year: 2024, ppg: 2.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Groin strain, 3 games", weekly: [2.3, 2.6, 2.9, 3.3, 5.0, 2.5, 1.8, 2.7, 1.7, 3.1, 2.3, 3.3, 3.6, 2.1] },
      { year: 2025, ppg: 2.3, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle injury, 2 games", weekly: [0.8, 3.4, 2.0, 4.2, 1.1, 2.6, 0.5, 3.8, 1.7, 2.9, 0.4, 3.2, 1.9, 2.1, 3.6] },
    ],
  },
  "alexander-mattison-rb": {
    ppg: 2.5,
    seasons: [
      { year: 2023, ppg: 4.4, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ribs injury, 1 game", weekly: [5.6, 3.7, 1.4, 6.1, 4.8, 4.8, 5.4, 3.2, 5.3, 2.6, 4.9, 3.0, 3.8, 6.0, 2.4, 7.4] },
      { year: 2024, ppg: 3.2, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, 2 games", weekly: [3.1, 3.6, 4.1, 1.5, 2.1, 4.0, 2.0, 4.0, 3.4, 2.7, 3.7, 3.6, 4.0, 3.7, 2.5] },
      { year: 2025, ppg: 2.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [1.4, 3.8, 2.2, 0.6, 4.5, 3.0, 1.8, 4.1, 0.9, 3.4, 2.0, 4.8, 1.2, 2.7, 0.5, 3.6, 2.1] },
    ],
  },
  "rasheen-ali-rb": {
    ppg: 1.7,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 1.1, gamesPlayed: 8, gamesMissed: 9, missedReason: "Practice squad most of season", weekly: [0.4, 1.5, 0.8, 1.5, 1.7, 1.3, 1.2, 0.4] },
      { year: 2025, ppg: 1.7, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hamstring strain, 1 game", weekly: [0.0, 2.4, 1.2, 3.0, 0.6, 1.8, 0.0, 2.6, 1.4, 3.4, 0.8, 2.0, 1.1, 3.6, 0.5, 2.2] },
    ],
  },
  "marlon-mack-rb": {
    ppg: 1.3,
    seasons: [
      { year: 2023, ppg: 2.6, gamesPlayed: 10, gamesMissed: 7, missedReason: "Achilles injury, 7 games", weekly: [1.5, 3.8, 1.8, 2.8, 1.5, 2.6, 3.2, 1.5, 3.8, 3.5] },
      { year: 2024, ppg: 1.8, gamesPlayed: 13, gamesMissed: 4, missedReason: "Healthy scratch, 4 games", weekly: [2.2, 2.6, 1.0, 2.3, 1.8, 1.5, 1.6, 1.4, 1.9, 2.5, 2.1, 1.3, 1.2] },
      { year: 2025, ppg: 1.3, gamesPlayed: 11, gamesMissed: 6, missedReason: "Quad strain, 6 games", weekly: [0.0, 2.2, 0.8, 1.6, 0.0, 2.4, 1.1, 0.5, 2.8, 1.3, 2.0] },
    ],
  },
  "deneric-prince-rb": {
    ppg: 1.8,
    seasons: [
      { year: 2023, ppg: 1.6, gamesPlayed: 12, gamesMissed: 5, missedReason: "Practice squad stint, 5 games", weekly: [1.1, 1.2, 1.7, 1.5, 0.8, 2.6, 2.4, 1.1, 1.3, 1.4, 1.5, 2.6] },
      { year: 2024, ppg: 2.2, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring tweak, 2 games", weekly: [1.2, 2.3, 1.9, 2.8, 2.8, 3.9, 1.9, 1.8, 1.5, 2.6, 1.5, 2.8, 1.6, 2.7, 1.7] },
      { year: 2025, ppg: 1.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Illness, 1 game", weekly: [0.5, 2.4, 1.2, 3.0, 0.8, 1.6, 2.8, 0.0, 1.9, 3.2, 0.6, 2.0, 1.4, 2.6, 0.9, 3.5] },
    ],
  },
  "carson-steele-rb": {
    ppg: 2.3,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 2.0, gamesPlayed: 14, gamesMissed: 3, missedReason: "Shoulder injury, 3 games", weekly: [2.3, 2.3, 2.3, 2.5, 2.0, 1.3, 0.7, 2.6, 2.4, 2.8, 1.1, 2.3, 1.8, 1.6] },
      { year: 2025, ppg: 2.3, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, 1 game", weekly: [1.0, 3.2, 1.8, 0.6, 4.0, 2.4, 1.2, 3.6, 0.8, 2.9, 1.5, 4.4, 2.0, 3.1, 0.9, 2.6] },
    ],
  },
  "emanuel-wilson-rb": {
    ppg: 1.9,
    seasons: [
      { year: 2023, ppg: 2.4, gamesPlayed: 16, gamesMissed: 1, missedReason: "Concussion, 1 game", weekly: [2.6, 1.3, 3.6, 3.1, 3.3, 2.3, 1.5, 1.7, 2.0, 3.2, 2.8, 2.5, 2.0, 2.1, 1.7, 2.7] },
      { year: 2024, ppg: 2.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [2.4, 3.3, 3.8, 3.8, 3.8, 3.3, 2.3, 2.7, 2.2, 2.6, 1.9, 2.6, 1.3, 3.7, 3.8, 3.1, 2.7] },
      { year: 2025, ppg: 1.9, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, 2 games", weekly: [0.6, 2.8, 1.4, 3.4, 0.9, 2.0, 0.0, 3.6, 1.7, 2.4, 0.5, 3.0, 1.2, 2.6, 1.9] },
    ],
  },
  "chris-brooks-rb": {
    ppg: 1.3,
    seasons: [
      { year: 2023, ppg: 2.0, gamesPlayed: 15, gamesMissed: 2, missedReason: "Wrist injury, 2 games", weekly: [2.3, 2.1, 1.5, 2.1, 2.1, 1.5, 2.9, 1.9, 1.8, 1.8, 1.6, 2.0, 2.6, 2.7, 1.1] },
      { year: 2024, ppg: 1.6, gamesPlayed: 13, gamesMissed: 4, missedReason: "Practice squad stint, 4 games", weekly: [1.4, 1.3, 2.0, 1.0, 2.0, 1.8, 2.4, 1.2, 1.4, 1.2, 1.7, 2.0, 1.4] },
      { year: 2025, ppg: 1.3, gamesPlayed: 14, gamesMissed: 3, missedReason: "Healthy scratch, 3 games", weekly: [0.0, 1.8, 0.6, 2.2, 1.0, 0.0, 1.5, 2.6, 0.8, 1.9, 0.4, 2.0, 1.1, 2.3] },
    ],
  },
  "israel-abanikanda-rb": {
    ppg: 1.9,
    seasons: [
      { year: 2023, ppg: 1.7, gamesPlayed: 11, gamesMissed: 6, missedReason: "Healthy scratch, 6 games", weekly: [1.7, 2.2, 1.6, 1.3, 1.1, 1.9, 2.5, 2.2, 1.3, 1.0, 1.9] },
      { year: 2024, ppg: 1.4, gamesPlayed: 9, gamesMissed: 8, missedReason: "Practice squad stint, 8 games", weekly: [2.0, 0.6, 1.9, 1.4, 1.6, 1.3, 1.1, 1.3, 1.4] },
      { year: 2025, ppg: 1.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, 1 game", weekly: [0.5, 2.6, 1.4, 3.2, 0.8, 2.0, 0.0, 3.6, 1.6, 2.8, 0.9, 3.4, 1.2, 2.4, 0.6, 3.0] },
    ],
  },
  "isaiah-davis-rb": {
    ppg: 2.1,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 1.2, gamesPlayed: 10, gamesMissed: 7, missedReason: "Practice squad most of season", weekly: [1.0, 1.7, 0.4, 1.9, 1.1, 0.9, 0.8, 1.4, 1.9, 0.9] },
      { year: 2025, ppg: 2.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [0.8, 3.0, 1.6, 2.4, 0.6, 3.6, 1.2, 2.8, 0.9, 4.0, 1.8, 2.2, 0.5, 3.4, 2.0, 1.4, 3.8] },
    ],
  },
  "deuce-vaughn-rb": {
    ppg: 1.4,
    seasons: [
      { year: 2023, ppg: 1.5, gamesPlayed: 14, gamesMissed: 3, missedReason: "Healthy scratch, 3 games", weekly: [1.2, 1.0, 1.1, 1.7, 1.4, 1.2, 1.0, 2.3, 1.5, 1.9, 1.2, 1.2, 2.2, 2.1] },
      { year: 2024, ppg: 1.1, gamesPlayed: 9, gamesMissed: 8, missedReason: "Practice squad stint, 8 games", weekly: [1.3, 0.8, 1.1, 1.0, 1.1, 1.6, 0.8, 0.7, 1.5] },
      { year: 2025, ppg: 1.4, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, 2 games", weekly: [0.4, 2.2, 0.8, 1.6, 0.0, 2.6, 1.2, 0.6, 2.4, 1.9, 0.5, 3.0, 1.4, 2.0, 1.1] },
    ],
  },
  "miles-sanders-rb": {
    ppg: 2.2,
    seasons: [
      { year: 2023, ppg: 5.8, gamesPlayed: 15, gamesMissed: 2, missedReason: "Shoulder injury, 2 games", weekly: [7.2, 5.6, 4.2, 1.9, 7.3, 7.5, 2.5, 8.0, 2.6, 6.5, 4.4, 4.7, 8.4, 8.5, 7.7] },
      { year: 2024, ppg: 3.6, gamesPlayed: 14, gamesMissed: 3, missedReason: "Knee injury, 3 games", weekly: [3.0, 2.1, 5.0, 3.4, 4.9, 1.1, 4.3, 4.2, 3.3, 6.1, 2.1, 4.9, 2.3, 3.7] },
      { year: 2025, ppg: 2.2, gamesPlayed: 16, gamesMissed: 1, missedReason: "Illness, 1 game", weekly: [0.8, 3.4, 1.6, 4.0, 1.0, 2.6, 0.5, 3.8, 1.4, 2.2, 4.2, 0.6, 2.8, 1.1, 3.5, 1.9] },
    ],
  },
  "roschon-johnson-rb": {
    ppg: 1.8,
    seasons: [
      { year: 2023, ppg: 3.0, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, 1 game", weekly: [3.8, 5.4, 4.2, 3.5, 2.3, 1.8, 3.1, 1.8, 4.4, 1.7, 2.3, 1.7, 4.2, 2.4, 2.8, 2.6] },
      { year: 2024, ppg: 2.4, gamesPlayed: 13, gamesMissed: 4, missedReason: "Concussion, 4 games", weekly: [1.6, 1.6, 2.5, 2.6, 2.7, 2.4, 1.9, 1.9, 3.1, 3.0, 2.4, 2.6, 2.9] },
      { year: 2025, ppg: 1.8, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, 2 games", weekly: [0.6, 2.8, 1.4, 3.2, 0.8, 2.0, 0.5, 3.4, 1.6, 2.4, 0.9, 3.0, 1.2, 2.6, 1.1] },
    ],
  },
  "travis-homer-rb": {
    ppg: 1.2,
    seasons: [
      { year: 2023, ppg: 1.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Illness, 1 game", weekly: [0.6, 2.1, 1.5, 2.6, 2.8, 1.8, 0.7, 1.8, 2.4, 2.0, 2.2, 1.1, 2.6, 2.0, 1.5, 1.1] },
      { year: 2024, ppg: 1.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [1.4, 1.5, 1.3, 1.4, 1.0, 1.7, 1.6, 2.5, 2.3, 1.1, 0.5, 1.2, 1.8, 1.2, 1.1, 2.3, 1.6] },
      { year: 2025, ppg: 1.2, gamesPlayed: 15, gamesMissed: 2, missedReason: "Healthy scratch, 2 games", weekly: [0.0, 1.8, 0.6, 2.0, 0.8, 1.4, 0.0, 2.2, 0.9, 1.6, 0.5, 2.4, 1.1, 1.9, 1.3] },
    ],
  },
  "pierre-strong-jr-rb": {
    ppg: 2.3,
    seasons: [
      { year: 2023, ppg: 2.2, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, 2 games", weekly: [2.8, 1.8, 1.7, 2.9, 3.0, 2.7, 1.8, 1.4, 1.2, 1.3, 2.6, 1.8, 2.9, 3.0, 2.1] },
      { year: 2024, ppg: 1.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Illness, 1 game", weekly: [2.7, 2.6, 2.0, 2.0, 1.4, 0.7, 2.6, 1.9, 2.3, 2.6, 1.7, 1.2, 1.5, 1.7, 1.7, 1.8] },
      { year: 2025, ppg: 2.3, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [0.8, 3.2, 1.6, 4.0, 1.0, 2.4, 0.5, 3.6, 1.8, 2.8, 4.4, 0.6, 3.0, 1.2, 2.6, 1.4, 3.8] },
    ],
  },
  "ahmani-marshall-rb": {
    ppg: 1.0,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 1.0, gamesPlayed: 9, gamesMissed: 8, missedReason: "Practice squad most of season", weekly: [0.0, 0.8, 1.4, 0.0, 2.0, 0.6, 1.2, 1.8, 0.9] },
    ],
  },
  "antonio-gibson-rb": {
    ppg: 1.6,
    seasons: [
      { year: 2023, ppg: 5.2, gamesPlayed: 16, gamesMissed: 1, missedReason: "Knee soreness, 1 game", weekly: [6.2, 4.9, 3.9, 4.5, 6.7, 6.5, 7.3, 4.2, 2.9, 4.4, 4.4, 6.0, 7.4, 6.7, 3.8, 3.4] },
      { year: 2024, ppg: 3.4, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, 2 games", weekly: [4.5, 2.5, 1.7, 1.5, 2.4, 4.0, 4.1, 3.9, 2.8, 4.7, 2.6, 4.0, 1.7, 4.7, 5.9] },
      { year: 2025, ppg: 1.6, gamesPlayed: 14, gamesMissed: 3, missedReason: "Concussion, 3 games", weekly: [0.6, 2.8, 1.2, 3.4, 0.8, 1.6, 0.0, 2.4, 1.0, 3.0, 0.5, 2.2, 1.4, 1.9] },
    ],
  },
  "jamycal-hasty-rb": {
    ppg: 1.4,
    seasons: [
      { year: 2023, ppg: 1.6, gamesPlayed: 13, gamesMissed: 4, missedReason: "Practice squad stint, 4 games", weekly: [1.8, 1.6, 1.1, 2.0, 1.7, 2.1, 1.4, 1.0, 0.9, 1.4, 1.8, 2.1, 1.9] },
      { year: 2024, ppg: 1.3, gamesPlayed: 12, gamesMissed: 5, missedReason: "Healthy scratch, 5 games", weekly: [1.2, 1.1, 2.0, 0.8, 1.5, 1.4, 1.7, 1.2, 1.5, 1.2, 1.4, 0.6] },
      { year: 2025, ppg: 1.4, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring tweak, 2 games", weekly: [0.4, 2.0, 0.8, 1.6, 0.0, 2.4, 1.0, 1.8, 0.6, 2.6, 1.2, 2.0, 0.9, 1.4, 2.2] },
    ],
  },
  "d-ernest-johnson-rb": {
    ppg: 1.2,
    seasons: [
      { year: 2023, ppg: 2.0, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, 2 games", weekly: [1.8, 1.3, 1.3, 2.2, 1.3, 1.8, 1.9, 2.3, 2.8, 2.4, 3.7, 1.8, 0.6, 2.2, 2.6] },
      { year: 2024, ppg: 1.6, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, 3 games", weekly: [1.7, 1.9, 1.9, 1.9, 2.3, 1.4, 0.9, 0.8, 1.8, 1.8, 1.1, 1.7, 1.2, 2.0] },
      { year: 2025, ppg: 1.2, gamesPlayed: 13, gamesMissed: 4, missedReason: "Healthy scratch, 4 games", weekly: [0.0, 1.8, 0.6, 1.4, 2.2, 0.5, 1.0, 0.0, 2.0, 1.2, 0.8, 2.4, 1.5] },
    ],
  },
  "keilan-robinson-rb": {
    ppg: 1.3,
    seasons: [
      { year: 2023, ppg: 1.4, gamesPlayed: 12, gamesMissed: 5, missedReason: "Practice squad stint, 5 games", weekly: [0.7, 1.4, 1.2, 2.2, 1.6, 1.8, 1.3, 0.8, 1.3, 1.9, 1.6, 1.0] },
      { year: 2024, ppg: 1.7, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, 2 games", weekly: [1.8, 2.4, 2.5, 1.7, 1.6, 1.9, 2.6, 1.6, 1.2, 1.1, 2.1, 1.3, 1.2, 0.9, 1.6] },
      { year: 2025, ppg: 1.3, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, 3 games", weekly: [0.5, 1.8, 0.8, 2.2, 0.0, 1.4, 2.0, 0.6, 1.6, 0.9, 2.4, 1.1, 1.9, 1.3] },
    ],
  },
  "kenny-mcintosh-rb": {
    ppg: 2.0,
    seasons: [
      { year: 2023, ppg: 1.2, gamesPlayed: 8, gamesMissed: 9, missedReason: "Knee injury, 9 games", weekly: [1.4, 0.9, 0.9, 1.4, 1.5, 0.7, 1.7, 1.1] },
      { year: 2024, ppg: 1.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, 3 games", weekly: [2.1, 2.2, 2.0, 2.1, 1.1, 1.4, 1.7, 1.7, 2.3, 3.0, 2.0, 1.5, 0.8, 1.3] },
      { year: 2025, ppg: 2.0, gamesPlayed: 16, gamesMissed: 1, missedReason: "Illness, 1 game", weekly: [0.6, 2.8, 1.2, 3.4, 0.8, 2.0, 0.5, 3.6, 1.6, 2.6, 0.9, 3.2, 1.4, 2.2, 1.0, 3.8] },
    ],
  },
  "george-holani-rb": {
    ppg: 1.3,
    seasons: [
      { year: 2023, ppg: 1.0, gamesPlayed: 9, gamesMissed: 8, missedReason: "Practice squad most of season", weekly: [1.0, 0.8, 0.6, 1.3, 1.4, 1.0, 1.4, 0.8, 0.7] },
      { year: 2024, ppg: 1.4, gamesPlayed: 13, gamesMissed: 4, missedReason: "Healthy scratch, 4 games", weekly: [1.7, 1.6, 1.8, 1.5, 1.9, 1.0, 1.2, 1.3, 0.8, 1.3, 1.7, 1.3, 1.1] },
      { year: 2025, ppg: 1.3, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, 2 games", weekly: [0.4, 1.8, 0.8, 2.2, 0.6, 1.4, 0.0, 2.4, 1.0, 1.9, 0.5, 2.6, 1.2, 2.0, 1.1] },
    ],
  },
  "julius-chestnut-rb": {
    ppg: 1.2,
    seasons: [
      { year: 2023, ppg: 0.8, gamesPlayed: 7, gamesMissed: 10, missedReason: "Practice squad most of season", weekly: [0.6, 0.4, 0.6, 1.1, 1.0, 1.1, 0.8] },
      { year: 2024, ppg: 1.1, gamesPlayed: 10, gamesMissed: 7, missedReason: "Practice squad stint, 7 games", weekly: [1.2, 0.9, 0.9, 1.5, 1.2, 0.3, 1.3, 1.6, 0.8, 1.3] },
      { year: 2025, ppg: 1.2, gamesPlayed: 12, gamesMissed: 5, missedReason: "Healthy scratch, 5 games", weekly: [0.0, 1.6, 0.6, 2.0, 0.8, 1.2, 0.0, 2.2, 1.0, 1.8, 0.5, 2.4] },
    ],
  },
  "jabari-small-rb": {
    ppg: 1.3,
    seasons: [
      { year: 2023, ppg: 0.9, gamesPlayed: 8, gamesMissed: 9, missedReason: "Practice squad most of season", weekly: [0.5, 1.1, 1.4, 0.8, 0.5, 0.7, 0.7, 1.5] },
      { year: 2024, ppg: 1.3, gamesPlayed: 11, gamesMissed: 6, missedReason: "Practice squad stint, 6 games", weekly: [0.8, 1.5, 1.4, 2.2, 1.1, 0.9, 0.9, 1.6, 1.4, 1.5, 1.0] },
      { year: 2025, ppg: 1.3, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, 3 games", weekly: [0.4, 1.8, 0.6, 2.0, 0.8, 1.4, 0.0, 2.2, 1.0, 1.9, 0.5, 2.6, 1.2, 2.0] },
    ],
  },
  "raheem-blackshear-rb": {
    ppg: 1.8,
    seasons: [
      { year: 2023, ppg: 1.2, gamesPlayed: 11, gamesMissed: 6, missedReason: "Practice squad stint, 6 games", weekly: [0.5, 1.2, 0.9, 1.0, 1.1, 2.1, 2.0, 0.9, 0.8, 1.5, 1.2] },
      { year: 2024, ppg: 1.6, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, 3 games", weekly: [1.6, 2.4, 2.1, 1.6, 1.3, 2.0, 1.4, 1.2, 1.7, 2.2, 1.3, 1.0, 1.4, 1.2] },
      { year: 2025, ppg: 1.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Illness, 1 game", weekly: [0.6, 2.4, 1.2, 3.0, 0.8, 1.8, 0.4, 2.6, 1.4, 2.2, 0.9, 3.2, 1.6, 2.0, 1.1, 2.8] },
    ],
  },
  "mike-boone-rb": {
    ppg: 1.1,
    seasons: [
      { year: 2023, ppg: 1.8, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, 2 games", weekly: [1.2, 1.2, 1.3, 1.9, 2.0, 1.8, 1.3, 1.5, 1.3, 1.7, 2.2, 3.1, 1.6, 2.5, 2.4] },
      { year: 2024, ppg: 1.4, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hamstring strain, 4 games", weekly: [1.2, 1.5, 1.4, 2.2, 2.2, 0.8, 1.5, 0.6, 1.6, 0.8, 1.3, 1.5, 1.6] },
      { year: 2025, ppg: 1.1, gamesPlayed: 12, gamesMissed: 5, missedReason: "Healthy scratch, 5 games", weekly: [0.0, 1.6, 0.6, 2.0, 0.8, 1.2, 0.0, 1.8, 1.0, 1.4, 0.5, 2.2] },
    ],
  },
  "jeremy-mcnichols-rb": {
    ppg: 1.0,
    seasons: [
      { year: 2023, ppg: 1.6, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, 3 games", weekly: [2.2, 2.9, 1.4, 1.9, 1.8, 0.6, 0.6, 1.3, 1.5, 1.1, 1.5, 1.1, 2.4, 2.1] },
      { year: 2024, ppg: 1.3, gamesPlayed: 12, gamesMissed: 5, missedReason: "Healthy scratch, 5 games", weekly: [0.8, 1.0, 1.6, 1.0, 1.9, 0.9, 1.5, 1.1, 1.5, 1.1, 1.5, 1.7] },
      { year: 2025, ppg: 1.0, gamesPlayed: 10, gamesMissed: 7, missedReason: "Practice squad stint, 7 games", weekly: [0.0, 1.4, 0.6, 1.8, 0.0, 1.0, 1.6, 0.4, 2.0, 1.1] },
    ],
  },
  "deshaun-fenwick-rb": {
    ppg: 1.2,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 1.0, gamesPlayed: 9, gamesMissed: 8, missedReason: "Practice squad most of season", weekly: [1.2, 1.1, 0.6, 1.4, 1.2, 0.7, 1.0, 0.8, 1.0] },
      { year: 2025, ppg: 1.2, gamesPlayed: 13, gamesMissed: 4, missedReason: "Healthy scratch, 4 games", weekly: [0.4, 1.8, 0.6, 2.0, 0.8, 1.4, 0.0, 2.2, 1.0, 1.9, 0.5, 2.4, 1.1] },
    ],
  },
  "ty-chandler-rb": {
    ppg: 1.7,
    seasons: [
      { year: 2023, ppg: 2.6, gamesPlayed: 16, gamesMissed: 1, missedReason: "Illness, 1 game", weekly: [2.1, 2.7, 2.5, 3.4, 2.8, 3.1, 2.5, 4.4, 0.9, 2.4, 2.3, 1.9, 1.8, 4.4, 1.7, 2.7] },
      { year: 2024, ppg: 2.0, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, 3 games", weekly: [1.9, 1.3, 2.6, 2.2, 1.6, 1.8, 0.6, 2.2, 1.6, 2.2, 2.2, 2.2, 2.5, 3.1] },
      { year: 2025, ppg: 1.7, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, 2 games", weekly: [0.6, 2.4, 1.2, 3.0, 0.8, 1.8, 0.4, 2.6, 1.4, 2.2, 0.9, 3.2, 1.6, 2.0, 1.1] },
    ],
  },
  "kene-nwangwu-rb": {
    ppg: 0.9,
    seasons: [
      { year: 2023, ppg: 1.4, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hamstring strain, 4 games", weekly: [1.1, 1.4, 1.9, 1.4, 1.5, 1.1, 1.4, 2.4, 1.0, 0.8, 1.4, 1.3, 1.5] },
      { year: 2024, ppg: 1.1, gamesPlayed: 11, gamesMissed: 6, missedReason: "Healthy scratch, 6 games", weekly: [1.4, 0.9, 1.3, 2.1, 1.1, 0.8, 0.8, 0.5, 1.6, 0.9, 0.7] },
      { year: 2025, ppg: 0.9, gamesPlayed: 9, gamesMissed: 8, missedReason: "Practice squad stint, 8 games", weekly: [0.0, 1.2, 0.6, 1.8, 0.0, 1.0, 0.5, 1.6, 1.1] },
    ],
  },
  "ja-marr-chase-wr": {
    ppg: 15.7,
    seasons: [
      { year: 2023, ppg: 17.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [18.4, 14.7, 21.5, 10.7, 15.2, 13.9, 21.7, 15.4, 15.0, 22.4, 25.7, 18.6, 12.6, 19.4, 17.6, 22.7, 13.7] },
      { year: 2024, ppg: 16.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [19.6, 14.4, 13.0, 17.7, 15.9, 16.3, 19.1, 19.1, 8.2, 23.9, 9.9, 12.1, 10.8, 25.7, 15.9, 18.7, 18.5] },
      { year: 2025, ppg: 15.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [21.2, 9.5, 14.6, 9.2, 31.8, 16.7, 6.0, 13.1, 19.9, 18.2, 13.5, 19.4, 22.2, 9.8, 23.4, 19.7, 11.8] },
    ],
  },
  "puka-nacua-wr": {
    ppg: 16.2,
    seasons: [
      { year: 2023, ppg: 18.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [19.8, 23.8, 22.3, 13.4, 29.4, 25.6, 22.0, 19.2, 15.0, 8.3, 25.7, 11.2, 12.9, 24.0, 12.3, 10.7, 20.6] },
      { year: 2024, ppg: 17.6, gamesPlayed: 6, gamesMissed: 11, missedReason: "Knee/ankle injuries, missed multiple games", weekly: [11.0, 22.5, 15.6, 21.8, 23.0, 11.7] },
      { year: 2025, ppg: 16.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [15.6, 10.8, 22.8, 10.0, 13.6, 6.9, 22.3, 14.1, 11.9, 10.7, 20.2, 27.6, 23.7, 20.1, 18.5, 8.7, 11.5] },
    ],
  },
  "jaxon-smith-njigba-wr": {
    ppg: 20.8,
    seasons: [
      { year: 2023, ppg: 19.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [26.4, 13.7, 14.2, 14.1, 14.3, 37.6, 11.0, 11.6, 28.0, 18.2, 21.2, 16.9, 22.5, 19.2, 27.4, 21.0, 15.9] },
      { year: 2024, ppg: 19.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [16.3, 26.0, 22.6, 6.3, 11.1, 12.5, 23.1, 18.9, 31.5, 23.9, 33.4, 26.8, 10.5, 11.3, 28.5, 19.6, 16.0] },
      { year: 2025, ppg: 20.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [16.0, 20.4, 16.8, 29.4, 24.4, 15.3, 17.7, 26.4, 12.5, 27.9, 26.7, 18.2, 5.7, 30.1, 21.1, 37.0, 9.7] },
    ],
  },
  "amon-ra-st-brown-wr": {
    ppg: 18.6,
    seasons: [
      { year: 2023, ppg: 18.3, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [17.3, 14.2, 7.7, 36.4, 19.6, 18.3, 25.2, 13.2, 12.9, 11.4, 36.7, 15.9, 23.4, 20.4, 5.8, 11.2, 21.5] },
      { year: 2024, ppg: 18.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [12.2, 5.7, 17.0, 22.7, 20.4, 13.5, 16.6, 23.6, 19.0, 7.1, 18.4, 13.9, 32.2, 23.0, 22.5, 19.7, 25.3] },
      { year: 2025, ppg: 18.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [34.9, 16.5, 13.6, 5.8, 18.1, 11.1, 11.0, 12.8, 22.2, 24.7, 17.8, 12.0, 18.8, 29.6, 19.1, 26.2, 16.4] },
    ],
  },
  "ceedee-lamb-wr": {
    ppg: 16.5,
    seasons: [
      { year: 2023, ppg: 16.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.4, 17.6, 16.9, 29.3, 7.8, 12.7, 16.4, 13.9, 18.5, 29.6, 16.5, 12.5, 10.0, 24.0, 9.7, 22.1, 19.7] },
      { year: 2024, ppg: 17.1, gamesPlayed: 8, gamesMissed: 9, missedReason: "High ankle sprain, Weeks 8-16 (returned late)", weekly: [19.9, 16.4, 18.0, 20.1, 15.5, 15.2, 18.8, 12.9] },
      { year: 2025, ppg: 16.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [19.8, 19.6, 23.1, 32.7, 15.4, 9.4, 17.7, 20.7, 15.1, 10.6, 13.8, 3.4, 23.7, 21.6, 19.4, 11.6, 8.4] },
    ],
  },
  "justin-jefferson-wr": {
    ppg: 16.7,
    seasons: [
      { year: 2023, ppg: 15.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [19.3, 17.2, 19.7, 8.3, 12.9, 11.5, 15.2, 15.9, 20.7, 13.1, 11.1, 15.0, 16.3, 20.2, 16.9, 11.8, 13.3] },
      { year: 2024, ppg: 15.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [12.8, 17.3, 13.7, 20.5, 8.7, 15.1, 22.1, 15.8, 17.6, 18.0, 8.5, 27.3, 15.6, 12.2, 15.3, 9.2, 20.6] },
      { year: 2025, ppg: 16.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [21.4, 23.6, 16.4, 10.3, 18.7, 22.8, 10.5, 16.4, 17.6, 22.8, 21.2, 17.5, 15.8, 15.4, 7.0, 14.5, 26.2] },
    ],
  },
  "drake-london-wr": {
    ppg: 16.3,
    seasons: [
      { year: 2023, ppg: 14.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.8, 11.8, 14.0, 11.3, 15.2, 17.4, 13.5, 9.2, 18.7, 10.7, 10.8, 8.9, 29.0, 18.4, 13.0, 19.0, 17.5] },
      { year: 2024, ppg: 15.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [19.1, 15.1, 19.1, 15.4, 7.1, 9.3, 18.9, 14.3, 10.4, 20.5, 18.7, 10.8, 25.6, 20.9, 20.0, 12.1, 9.6] },
      { year: 2025, ppg: 16.3, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.8, 10.4, 10.3, 15.1, 18.0, 14.5, 17.9, 18.7, 21.3, 23.2, 18.0, 12.9, 17.0, 32.2, 7.8, 23.3, 16.5] },
    ],
  },
  "a-j-brown-wr": {
    ppg: 13.2,
    seasons: [
      { year: 2023, ppg: 14.7, gamesPlayed: 15, gamesMissed: 2, missedReason: "Knee soreness, 2 games", weekly: [18.0, 14.1, 20.1, 18.1, 10.8, 12.2, 12.8, 5.2, 10.7, 12.5, 17.3, 12.5, 17.1, 12.4, 26.7] },
      { year: 2024, ppg: 14.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.8, 8.2, 18.7, 18.3, 9.9, 18.6, 17.3, 20.8, 15.1, 14.0, 10.7, 13.0, 15.7, 13.3, 19.4, 9.3, 9.6] },
      { year: 2025, ppg: 13.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [13.6, 6.6, 9.7, 13.3, 18.2, 8.3, 17.5, 17.7, 8.2, 15.4, 13.9, 7.5, 21.0, 18.7, 11.5, 15.1, 17.1] },
    ],
  },
  "nico-collins-wr": {
    ppg: 18.0,
    seasons: [
      { year: 2023, ppg: 15.3, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hamstring strain, Weeks 6-9", weekly: [9.3, 14.0, 19.1, 11.3, 14.7, 7.9, 11.4, 18.1, 18.4, 11.0, 19.4, 18.3, 26.0] },
      { year: 2024, ppg: 16.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [16.5, 22.6, 12.5, 15.2, 21.8, 15.1, 20.5, 20.5, 11.8, 15.3, 11.7, 11.8, 15.1, 16.5, 16.9, 17.5, 17.5] },
      { year: 2025, ppg: 18.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [26.0, 18.4, 31.0, 11.6, 14.3, 25.5, 18.5, 3.1, 21.0, 9.3, 18.9, 17.3, 23.0, 10.3, 25.2, 7.1, 15.7] },
    ],
  },
  "george-pickens-wr": {
    ppg: 13.5,
    seasons: [
      { year: 2023, ppg: 14.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [11.0, 9.8, 10.1, 14.9, 21.9, 13.0, 15.3, 12.5, 15.2, 24.9, 13.2, 5.7, 13.9, 11.3, 22.7, 13.9, 12.1] },
      { year: 2024, ppg: 13.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [10.4, 15.1, 10.8, 10.6, 18.3, 11.0, 6.5, 14.5, 11.9, 19.1, 19.1, 13.1, 11.5, 15.0, 9.1, 9.8, 22.0] },
      { year: 2025, ppg: 13.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [11.3, 10.7, 5.0, 11.4, 11.0, 9.6, 16.3, 13.8, 19.6, 19.0, 7.0, 26.8, 14.4, 8.6, 15.6, 15.0, 10.3] },
    ],
  },
  "chris-olave-wr": {
    ppg: 14.0,
    seasons: [
      { year: 2023, ppg: 13.8, gamesPlayed: 15, gamesMissed: 2, missedReason: "Concussion protocol, 2 games", weekly: [14.4, 12.8, 16.2, 12.2, 15.9, 17.9, 7.5, 18.3, 17.2, 19.5, 12.6, 10.4, 9.9, 14.2, 8.0] },
      { year: 2024, ppg: 13.4, gamesPlayed: 13, gamesMissed: 4, missedReason: "Concussion protocol, multiple stints", weekly: [7.2, 12.9, 20.0, 5.8, 10.9, 6.1, 17.8, 17.5, 17.1, 15.8, 9.2, 16.0, 17.9] },
      { year: 2025, ppg: 14.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [14.4, 25.9, 2.9, 19.2, 8.4, 18.5, 10.4, 18.6, 16.2, 8.4, 10.6, 10.1, 12.5, 17.4, 18.7, 12.1, 8.8] },
    ],
  },
  "rashee-rice-wr": {
    ppg: 11.6,
    seasons: [
      { year: 2023, ppg: 12.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.1, 11.5, 10.9, 14.6, 17.6, 18.2, 7.5, 12.4, 15.5, 8.2, 12.9, 9.7, 15.3, 7.6, 24.6, 9.7, 8.2] },
      { year: 2024, ppg: 11.6, gamesPlayed: 8, gamesMissed: 9, missedReason: "Knee surgery, Weeks 9-17", weekly: [8.5, 10.2, 15.9, 12.4, 12.4, 10.7, 12.7, 10.0] },
      { year: 2025, ppg: 11.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [12.1, 10.8, 6.5, 3.5, 16.3, 16.2, 12.1, 19.7, 12.0, 7.4, 7.7, 10.2, 16.8, 14.7, 14.3, 12.9, 2.0] },
    ],
  },
  "devonta-smith-wr": {
    ppg: 17.3,
    seasons: [
      { year: 2023, ppg: 15.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [19.8, 17.8, 11.7, 20.7, 19.0, 19.2, 9.3, 6.1, 12.2, 7.1, 25.9, 21.5, 11.3, 21.0, 23.0, 8.5, 7.7] },
      { year: 2024, ppg: 17.5, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, Weeks 4-6", weekly: [21.5, 13.9, 20.7, 8.9, 19.4, 13.0, 21.9, 19.6, 30.2, 13.8, 22.2, 20.2, 9.3, 10.4] },
      { year: 2025, ppg: 17.3, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [22.0, 12.0, 16.0, 12.4, 24.4, 21.7, 15.5, 19.7, 20.4, 3.4, 11.5, 33.8, 15.3, 10.3, 19.5, 15.5, 31.3] },
    ],
  },
  "zay-flowers-wr": {
    ppg: 13.2,
    seasons: [
      { year: 2023, ppg: 12.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.6, 9.9, 16.1, 15.2, 17.4, 9.0, 16.1, 13.5, 10.8, 10.2, 17.4, 8.2, 18.1, 10.4, 10.8, 16.7, 9.8] },
      { year: 2024, ppg: 12.2, gamesPlayed: 15, gamesMissed: 2, missedReason: "Knee sprain, 2 games", weekly: [8.5, 12.7, 9.0, 9.4, 10.0, 10.5, 7.7, 10.2, 16.2, 8.8, 19.8, 13.9, 8.2, 19.2, 18.9] },
      { year: 2025, ppg: 13.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [10.6, 15.0, 12.1, 19.1, 13.3, 18.1, 3.3, 18.4, 8.4, 18.2, 9.1, 7.7, 21.6, 16.2, 10.4, 15.0, 12.6] },
    ],
  },
  "tee-higgins-wr": {
    ppg: 12.4,
    seasons: [
      { year: 2023, ppg: 14.1, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hamstring strain, Weeks 3-6", weekly: [12.2, 10.9, 13.6, 17.7, 19.6, 6.6, 12.2, 9.7, 20.1, 19.8, 15.2, 17.0, 8.7] },
      { year: 2024, ppg: 13.2, gamesPlayed: 14, gamesMissed: 3, missedReason: "Quad injury, Weeks 12-14", weekly: [14.1, 9.1, 18.8, 16.8, 15.6, 16.6, 6.7, 10.8, 11.4, 14.9, 7.7, 16.7, 8.2, 17.4] },
      { year: 2025, ppg: 12.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.0, 11.8, 17.7, 17.0, 13.3, 21.4, 7.5, 16.5, 11.7, 2.6, 9.4, 13.8, 11.8, 7.6, 14.0, 10.0, 15.4] },
    ],
  },
  "garrett-wilson-wr": {
    ppg: 13.2,
    seasons: [
      { year: 2023, ppg: 11.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [15.4, 10.8, 6.9, 16.8, 9.2, 13.5, 5.9, 12.1, 6.5, 15.9, 22.1, 9.0, 7.8, 6.6, 14.6, 10.5, 10.2] },
      { year: 2024, ppg: 12.3, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.8, 9.3, 14.1, 8.9, 14.0, 17.6, 7.0, 9.0, 17.0, 17.2, 8.1, 16.4, 14.4, 7.3, 12.0, 17.6, 9.4] },
      { year: 2025, ppg: 13.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [12.5, 9.8, 2.5, 18.3, 16.6, 8.9, 8.3, 13.9, 15.2, 11.5, 17.5, 16.1, 14.6, 8.7, 9.5, 23.1, 17.5] },
    ],
  },
  "jaylen-waddle-wr": {
    ppg: 12.8,
    seasons: [
      { year: 2023, ppg: 12.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.3, 4.3, 12.9, 15.5, 8.2, 12.1, 10.5, 13.4, 12.4, 24.2, 15.4, 13.0, 11.6, 5.8, 17.5, 15.9, 13.9] },
      { year: 2024, ppg: 12.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [11.7, 8.3, 24.1, 16.0, 15.3, 10.0, 8.0, 9.2, 10.9, 9.3, 7.0, 14.4, 16.7, 15.8, 10.0, 7.8, 18.0] },
      { year: 2025, ppg: 12.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Ankle sprain, Weeks 5-7", weekly: [17.3, 16.6, 16.5, 14.9, 8.2, 15.2, 13.6, 10.6, 21.4, 3.0, 5.4, 6.9, 12.9, 14.1] },
    ],
  },
  "terry-mclaurin-wr": {
    ppg: 14.7,
    seasons: [
      { year: 2023, ppg: 12.3, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [10.9, 13.9, 13.6, 8.9, 16.2, 12.4, 12.2, 16.9, 16.7, 10.8, 7.7, 6.1, 8.5, 16.8, 12.4, 11.1, 14.0] },
      { year: 2024, ppg: 13.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [19.1, 13.4, 10.7, 8.0, 16.7, 24.4, 15.2, 7.6, 8.1, 6.0, 21.7, 25.4, 10.8, 4.3, 8.9, 10.3, 18.9] },
      { year: 2025, ppg: 14.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [20.0, 17.6, 13.8, 11.0, 22.6, 16.5, 5.3, 14.5, 15.8, 11.0, 8.8, 12.4, 12.8, 14.2, 18.0, 12.4, 18.3] },
    ],
  },
  "davante-adams-wr": {
    ppg: 13.5,
    seasons: [
      { year: 2023, ppg: 11.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.8, 14.2, 15.4, 13.6, 10.7, 10.0, 15.0, 14.9, 10.6, 8.0, 15.2, 3.8, 7.3, 6.5, 14.6, 14.2, 15.1] },
      { year: 2024, ppg: 12.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [14.3, 7.6, 10.3, 10.9, 16.2, 11.8, 7.4, 10.5, 14.8, 7.7, 7.7, 6.8, 9.2, 15.3, 15.7, 22.5, 17.0] },
      { year: 2025, ppg: 13.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle soreness (age-related maintenance), 2 games", weekly: [15.9, 17.7, 16.2, 11.3, 6.9, 11.6, 20.5, 5.2, 18.2, 10.7, 14.9, 11.8, 12.3, 7.0, 10.3] },
    ],
  },
  "jameson-williams-wr": {
    ppg: 16.2,
    seasons: [
      { year: 2023, ppg: 12.7, gamesPlayed: 11, gamesMissed: 6, missedReason: "Suspension (PED), 2 games; hamstring, 4 games", weekly: [11.7, 13.0, 11.9, 17.2, 12.4, 17.4, 11.7, 11.1, 8.0, 15.0, 10.3] },
      { year: 2024, ppg: 14.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [27.9, 7.5, 11.3, 17.1, 14.7, 9.2, 11.2, 14.3, 12.2, 13.8, 17.4, 20.8, 19.3, 12.5, 19.1, 10.8, 12.5] },
      { year: 2025, ppg: 16.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [22.1, 26.3, 18.1, 9.5, 15.0, 21.5, 11.0, 12.6, 14.0, 16.1, 14.5, 7.7, 13.0, 23.6, 13.7, 20.2, 10.1] },
    ],
  },
  "christian-watson-wr": {
    ppg: 9.8,
    seasons: [
      { year: 2023, ppg: 12.8, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hamstring strain, Weeks 5-8", weekly: [16.4, 11.2, 4.4, 13.4, 12.1, 15.6, 23.1, 5.1, 16.0, 9.0, 12.4, 10.0, 17.7] },
      { year: 2024, ppg: 10.7, gamesPlayed: 12, gamesMissed: 5, missedReason: "ACL tear, Weeks 13-17", weekly: [10.3, 11.0, 8.0, 11.3, 12.9, 8.5, 11.3, 9.6, 11.5, 9.1, 12.9, 12.0] },
      { year: 2025, ppg: 9.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.5, 11.5, 10.5, 7.4, 11.8, 12.3, 2.5, 10.9, 12.1, 6.2, 12.9, 13.7, 15.1, 5.5, 9.4, 13.5, 14.3] },
    ],
  },
  "mike-evans-wr": {
    ppg: 10.7,
    seasons: [
      { year: 2023, ppg: 10.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.9, 14.6, 11.8, 9.5, 14.8, 6.0, 13.5, 10.5, 15.3, 13.7, 15.4, 6.7, 6.5, 7.1, 11.1, 6.1, 13.1] },
      { year: 2024, ppg: 11.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, 2 games", weekly: [6.5, 13.2, 15.6, 7.3, 11.9, 10.9, 21.1, 13.4, 7.7, 12.5, 7.2, 14.3, 10.5, 8.2, 12.2] },
      { year: 2025, ppg: 10.7, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, Weeks 10-12", weekly: [15.4, 13.1, 1.7, 9.6, 9.1, 10.5, 20.4, 14.0, 13.2, 5.7, 14.9, 10.2, 11.5, 7.1] },
    ],
  },
  "dj-moore-wr": {
    ppg: 13.7,
    seasons: [
      { year: 2023, ppg: 10.3, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [13.4, 6.7, 8.2, 9.7, 11.1, 8.1, 10.4, 10.0, 15.9, 8.1, 12.3, 16.4, 12.3, 14.3, 8.5, 6.5, 3.2] },
      { year: 2024, ppg: 12.3, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [16.3, 10.1, 15.3, 11.1, 14.0, 8.2, 16.8, 12.5, 9.7, 23.5, 14.7, 13.9, 6.0, 6.9, 8.1, 15.0, 7.0] },
      { year: 2025, ppg: 13.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.9, 11.4, 10.6, 19.4, 10.9, 13.2, 17.0, 14.4, 24.4, 11.2, 13.4, 11.4, 13.8, 12.2, 11.6, 13.3, 20.0] },
    ],
  },
  "parker-washington-wr": {
    ppg: 11.5,
    seasons: [
      { year: 2023, ppg: 10.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.1, 13.5, 9.7, 6.6, 7.5, 12.9, 9.4, 11.1, 7.3, 7.8, 13.1, 14.4, 6.1, 19.6, 10.8, 14.6, 10.4] },
      { year: 2024, ppg: 11.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.3, 12.6, 6.3, 12.6, 19.6, 19.3, 14.8, 13.1, 10.9, 10.5, 11.5, 6.6, 10.8, 11.4, 13.0, 7.2, 3.9] },
      { year: 2025, ppg: 11.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [11.4, 14.5, 7.1, 18.5, 13.8, 2.8, 12.7, 11.5, 12.1, 11.0, 14.4, 9.7, 13.9, 8.9, 9.5, 9.4, 14.0] },
    ],
  },
  "dk-metcalf-wr": {
    ppg: 11.9,
    seasons: [
      { year: 2023, ppg: 10.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [11.8, 13.4, 12.0, 10.5, 7.5, 11.3, 13.7, 6.9, 13.4, 12.5, 3.2, 12.0, 9.2, 7.9, 13.7, 13.5, 9.4] },
      { year: 2024, ppg: 12.2, gamesPlayed: 15, gamesMissed: 2, missedReason: "Knee soreness, 2 games", weekly: [10.8, 13.0, 10.6, 15.1, 14.3, 11.1, 6.7, 11.8, 16.4, 16.2, 8.5, 8.3, 10.9, 18.1, 11.2] },
      { year: 2025, ppg: 11.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.6, 24.0, 8.9, 7.3, 13.3, 10.5, 18.2, 13.2, 4.0, 8.3, 16.8, 12.1, 16.2, 12.0, 10.7, 10.5, 8.4] },
    ],
  },
  "alec-pierce-wr": {
    ppg: 8.6,
    seasons: [
      { year: 2023, ppg: 9.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.7, 7.8, 14.8, 7.0, 15.5, 10.1, 6.3, 7.7, 5.5, 15.8, 11.1, 8.5, 9.1, 8.5, 13.3, 8.3, 5.9] },
      { year: 2024, ppg: 9.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [14.8, 14.9, 11.9, 15.6, 7.9, 14.4, 5.7, 9.6, 6.3, 12.4, 12.2, 6.7, 6.7, 3.5, 7.2, 6.1, 7.3] },
      { year: 2025, ppg: 8.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.1, 7.1, 12.5, 5.4, 10.7, 9.3, 14.2, 6.0, 8.6, 8.0, 8.0, 11.3, 11.7, 5.5, 8.4, 7.8, 4.1] },
    ],
  },
  "courtland-sutton-wr": {
    ppg: 6.2,
    seasons: [
      { year: 2023, ppg: 7.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.1, 7.2, 6.7, 4.7, 8.8, 6.1, 8.8, 6.5, 8.6, 4.6, 8.4, 4.8, 8.3, 8.9, 5.3, 11.4, 5.8] },
      { year: 2024, ppg: 6.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.8, 5.3, 4.5, 5.0, 8.6, 5.1, 6.7, 8.8, 4.6, 7.4, 4.7, 3.3, 5.7, 7.0, 6.5, 5.8, 7.2] },
      { year: 2025, ppg: 6.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.0, 4.8, 7.5, 7.4, 6.0, 11.3, 8.5, 7.5, 6.4, 1.3, 7.9, 4.7, 5.4, 5.9, 7.1, 5.6, 0.3] },
    ],
  },
  "chris-godwin-jr-wr": {
    ppg: 8.5,
    seasons: [
      { year: 2023, ppg: 7.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, Weeks 9-11", weekly: [13.0, 5.0, 7.7, 10.9, 8.0, 5.0, 7.3, 7.3, 8.5, 6.5, 4.8, 8.5, 8.1, 8.6] },
      { year: 2024, ppg: 8.3, gamesPlayed: 9, gamesMissed: 8, missedReason: "Ankle dislocation, Weeks 8-15", weekly: [5.9, 9.5, 6.0, 11.3, 5.9, 11.6, 6.3, 6.9, 11.3] },
      { year: 2025, ppg: 8.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.8, 8.0, 9.3, 11.4, 10.0, 8.9, 4.4, 6.3, 9.9, 11.2, 8.7, 4.3, 10.7, 10.6, 3.7, 9.1, 17.0] },
    ],
  },
  "michael-wilson-wr": {
    ppg: 8.7,
    seasons: [
      { year: 2023, ppg: 8.4, gamesPlayed: 16, gamesMissed: 1, missedReason: "Concussion protocol, 1 game", weekly: [11.6, 12.9, 16.4, 5.2, 9.5, 2.8, 11.4, 5.9, 6.1, 8.6, 5.5, 2.8, 10.8, 12.4, 6.7, 5.8] },
      { year: 2024, ppg: 8.5, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hand fracture, Weeks 6-8", weekly: [8.1, 7.3, 9.6, 7.4, 6.1, 5.9, 9.9, 7.5, 15.6, 9.0, 10.0, 5.8, 5.6, 11.2] },
      { year: 2025, ppg: 8.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [10.0, 3.2, 7.1, 10.0, 6.8, 12.0, 10.7, 8.4, 7.6, 6.5, 6.8, 12.1, 6.9, 13.9, 11.7, 7.2, 5.0] },
    ],
  },
  "michael-pittman-jr-wr": {
    ppg: 10.7,
    seasons: [
      { year: 2023, ppg: 8.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.9, 9.2, 10.7, 4.7, 5.2, 14.2, 6.9, 4.5, 14.5, 9.9, 10.5, 5.7, 10.2, 6.7, 5.5, 9.7, 5.8] },
      { year: 2024, ppg: 9.0, gamesPlayed: 15, gamesMissed: 2, missedReason: "Quad injury, 2 games", weekly: [11.3, 5.9, 5.0, 8.0, 7.3, 7.5, 10.2, 12.1, 6.5, 9.7, 9.0, 6.7, 12.0, 10.8, 13.0] },
      { year: 2025, ppg: 10.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [10.1, 12.6, 7.0, 15.4, 11.6, 7.9, 7.4, 11.5, 3.5, 7.0, 16.2, 14.6, 9.5, 6.2, 14.4, 9.5, 18.5] },
    ],
  },
  "malik-nabers-wr": {
    ppg: 14.0,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 12.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [14.5, 16.4, 7.5, 11.5, 15.7, 18.2, 8.0, 7.2, 21.5, 6.8, 7.1, 11.1, 15.3, 10.5, 16.5, 10.9, 7.0] },
      { year: 2025, ppg: 14.0, gamesPlayed: 13, gamesMissed: 4, missedReason: "ACL tear, Weeks 14-17 (out for season)", weekly: [9.5, 10.5, 16.0, 17.7, 9.7, 9.4, 19.0, 19.5, 12.1, 28.7, 10.5, 8.6, 4.6] },
    ],
  },
  "ladd-mcconkey-wr": {
    ppg: 12.8,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 10.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.7, 9.8, 6.5, 8.5, 13.6, 7.3, 15.7, 9.5, 8.7, 16.0, 14.8, 8.8, 11.6, 16.3, 6.5, 13.8, 7.8] },
      { year: 2025, ppg: 12.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [11.0, 13.5, 13.4, 12.3, 26.0, 9.5, 15.6, 14.0, 10.0, 16.6, 7.7, 16.7, 15.7, 16.3, 10.2, 5.8, 14.0] },
    ],
  },
  "rome-odunze-wr": {
    ppg: 8.8,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 7.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.3, 5.1, 4.1, 6.9, 7.1, 8.0, 6.6, 9.0, 7.6, 7.8, 8.0, 3.5, 5.9, 7.9, 9.8, 6.1, 10.0] },
      { year: 2025, ppg: 8.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.6, 11.7, 5.6, 12.3, 5.0, 6.3, 12.3, 12.8, 5.3, 11.3, 17.4, 10.1, 8.1, 5.8, 8.8, 4.3, 9.8] },
    ],
  },
  "marvin-harrison-jr-wr": {
    ppg: 11.2,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 8.9, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, rookie year, Weeks 7-9", weekly: [12.9, 9.7, 6.6, 10.3, 5.9, 13.5, 5.5, 7.9, 7.9, 4.6, 11.5, 7.9, 9.2, 11.2] },
      { year: 2025, ppg: 11.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [15.4, 16.0, 13.1, 9.8, 6.4, 17.9, 14.4, 9.7, 12.3, 14.2, 5.0, 13.3, 7.6, 9.0, 7.1, 12.8, 3.2] },
    ],
  },
  "brian-thomas-jr-wr": {
    ppg: 10.6,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 8.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [11.1, 10.7, 11.0, 11.9, 6.6, 4.7, 10.4, 10.8, 8.9, 3.8, 5.4, 10.9, 9.9, 5.4, 12.0, 3.3, 2.6] },
      { year: 2025, ppg: 10.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [10.6, 11.4, 8.0, 12.0, 10.2, 12.3, 2.1, 9.8, 8.2, 21.7, 6.3, 15.3, 14.8, 7.1, 14.1, 9.3, 5.2] },
    ],
  },
  "tetairoa-mcmillan-wr": {
    ppg: 13.3,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 13.3, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [11.9, 11.7, 11.1, 16.1, 7.8, 17.9, 12.4, 3.8, 18.7, 17.2, 19.0, 24.6, 14.4, 14.7, 14.2, 10.3, 2.2] },
    ],
  },
  "emeka-egbuka-wr": {
    ppg: 10.1,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 10.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [12.1, 11.4, 13.0, 10.8, 13.2, 10.6, 7.4, 8.8, 4.1, 11.4, 5.3, 7.7, 12.2, 6.5, 7.1, 12.4, 19.8] },
    ],
  },
  "luther-burden-iii-wr": {
    ppg: 9.9,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 9.9, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, rookie year, 2 games", weekly: [17.8, 12.6, 11.9, 8.1, 3.4, 14.1, 6.3, 14.1, 12.6, 10.8, 12.7, 11.5, 8.7, 3.4, 8.4] },
    ],
  },
  "carnell-tate-wr": {
    ppg: 0.0,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
    ],
  },
  "jordyn-tyson-wr": {
    ppg: 0.0,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
    ],
  },
  "quentin-johnston-wr": {
    ppg: 9.8,
    seasons: [
      { year: 2023, ppg: 7.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.4, 10.1, 7.5, 10.1, 10.0, 4.6, 6.1, 4.9, 7.1, 9.6, 5.9, 6.1, 10.8, 5.8, 8.6, 6.6, 9.0] },
      { year: 2024, ppg: 8.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [3.0, 8.3, 3.2, 10.4, 9.2, 5.1, 5.8, 8.9, 7.6, 13.2, 8.6, 12.2, 7.4, 13.3, 13.2, 8.8, 8.0] },
      { year: 2025, ppg: 9.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.0, 8.9, 7.8, 9.4, 11.7, 10.7, 9.6, 7.5, 9.6, 13.2, 12.8, 7.6, 2.1, 14.1, 14.8, 10.7, 8.5] },
    ],
  },
  "josh-downs-wr": {
    ppg: 6.3,
    seasons: [
      { year: 2023, ppg: 6.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Shoulder injury, Week 3", weekly: [5.2, 9.4, 8.1, 6.4, 9.2, 5.9, 3.8, 5.6, 6.8, 7.0, 11.6, 5.5, 4.7, 6.3, 6.5, 8.4] },
      { year: 2024, ppg: 7.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.4, 13.2, 6.9, 9.7, 4.2, 6.8, 5.8, 5.0, 9.1, 4.8, 6.7, 8.8, 8.7, 10.4, 5.3, 6.5, 7.2] },
      { year: 2025, ppg: 6.3, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.0, 8.2, 7.3, 5.7, 4.5, 5.5, 9.6, 4.8, 7.3, 7.7, 3.2, 6.8, 9.8, 2.0, 5.9, 6.5, 4.8] },
    ],
  },
  "wan-dale-robinson-wr": {
    ppg: 8.1,
    seasons: [
      { year: 2023, ppg: 8.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.8, 11.6, 8.9, 12.3, 6.2, 11.3, 6.3, 8.5, 11.1, 6.1, 9.4, 8.8, 7.3, 5.1, 9.3, 10.5, 5.4] },
      { year: 2024, ppg: 9.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.5, 9.0, 5.9, 7.9, 9.5, 12.5, 12.5, 11.5, 6.3, 11.3, 10.9, 7.9, 7.2, 11.8, 6.4, 9.3, 5.3] },
      { year: 2025, ppg: 8.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.7, 4.6, 3.4, 6.5, 7.5, 14.2, 5.9, 7.1, 3.4, 11.2, 13.0, 8.2, 8.9, 8.5, 8.1, 4.9, 15.7] },
    ],
  },
  "makai-lemon-wr": {
    ppg: 7.1,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 7.1, gamesPlayed: 16, gamesMissed: 1, missedReason: "Concussion protocol, Week 7", weekly: [6.7, 7.5, 7.9, 10.7, 8.4, 8.2, 8.2, 3.1, 10.0, 9.2, 8.2, 2.1, 5.4, 8.9, 2.5, 6.5] },
    ],
  },
  "jordan-addison-wr": {
    ppg: 7.9,
    seasons: [
      { year: 2023, ppg: 7.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [10.9, 5.0, 3.1, 4.8, 7.7, 7.6, 6.7, 10.4, 10.5, 8.0, 10.7, 4.5, 7.0, 7.2, 7.8, 13.6, 5.4] },
      { year: 2024, ppg: 8.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.5, 7.9, 12.6, 6.2, 13.1, 8.1, 10.6, 8.1, 7.4, 8.2, 7.5, 11.1, 11.7, 11.7, 5.6, 9.7, 5.3] },
      { year: 2025, ppg: 7.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [12.3, 4.9, 9.5, 9.1, 9.4, 6.4, 10.6, 1.9, 5.9, 7.7, 5.5, 5.6, 5.9, 15.5, 11.4, 10.3, 2.7] },
    ],
  },
  "jakobi-meyers-wr": {
    ppg: 8.4,
    seasons: [
      { year: 2023, ppg: 8.7, gamesPlayed: 16, gamesMissed: 1, missedReason: "Groin strain, Week 3", weekly: [7.8, 6.7, 14.2, 10.0, 4.9, 10.9, 11.0, 10.9, 8.1, 8.8, 11.5, 6.3, 9.9, 5.8, 6.7, 5.7] },
      { year: 2024, ppg: 8.0, gamesPlayed: 11, gamesMissed: 6, missedReason: "Knee injury, placed on IR Week 3", weekly: [10.6, 3.8, 5.0, 9.3, 8.4, 8.0, 8.9, 11.3, 8.2, 9.5, 5.0] },
      { year: 2025, ppg: 8.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.7, 7.6, 8.3, 8.6, 7.2, 8.1, 10.2, 5.0, 8.8, 9.2, 6.1, 9.7, 11.3, 11.2, 10.6, 7.5, 6.5] },
    ],
  },
  "jayden-reed-wr": {
    ppg: 6.1,
    seasons: [
      { year: 2023, ppg: 6.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.6, 8.7, 5.0, 6.4, 8.5, 4.5, 5.4, 3.9, 10.4, 9.9, 6.7, 4.0, 9.5, 9.1, 7.4, 5.7, 4.6] },
      { year: 2024, ppg: 6.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.1, 5.2, 6.0, 9.7, 8.2, 9.5, 5.3, 8.1, 5.4, 2.5, 9.7, 9.1, 6.5, 5.6, 4.8, 7.6, 7.3] },
      { year: 2025, ppg: 6.1, gamesPlayed: 9, gamesMissed: 8, missedReason: "Shoulder injury, placed on IR Week 4", weekly: [7.5, 5.3, 2.1, 7.5, 5.2, 6.7, 6.5, 9.2, 4.8] },
    ],
  },
  "xavier-worthy-wr": {
    ppg: 7.5,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 7.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.2, 11.4, 2.0, 6.2, 7.0, 8.9, 7.1, 7.8, 6.9, 6.7, 8.0, 8.5, 4.5, 8.6, 9.0, 5.7, 8.9] },
      { year: 2025, ppg: 7.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.6, 5.2, 9.4, 3.5, 8.9, 10.2, 4.0, 11.2, 9.2, 11.4, 7.2, 0.0, 9.0, 5.1, 9.6, 11.9, 5.3] },
    ],
  },
  "jayden-higgins-wr": {
    ppg: 6.8,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 6.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Groin strain, Weeks 3-5", weekly: [10.4, 7.0, 8.4, 7.7, 10.0, 10.5, 4.1, 3.4, 7.2, 7.1, 5.8, 4.0, 2.4, 7.6] },
    ],
  },
  "khalil-shakir-wr": {
    ppg: 9.1,
    seasons: [
      { year: 2023, ppg: 6.9, gamesPlayed: 11, gamesMissed: 6, missedReason: "Concussion protocol, placed on IR Week 8", weekly: [6.0, 4.1, 10.0, 4.6, 9.9, 7.8, 5.5, 4.2, 7.8, 11.1, 4.9] },
      { year: 2024, ppg: 8.1, gamesPlayed: 16, gamesMissed: 1, missedReason: "Wrist injury, Week 4", weekly: [5.6, 9.6, 5.3, 8.5, 12.1, 6.3, 8.9, 7.8, 4.8, 8.2, 6.7, 11.2, 9.6, 8.7, 10.7, 5.6] },
      { year: 2025, ppg: 9.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [3.7, 9.8, 9.8, 13.1, 5.5, 12.0, 13.1, 13.0, 8.1, 6.4, 11.7, 8.9, 9.0, 12.9, 7.8, 1.7, 7.4] },
    ],
  },
  "jalen-coker-wr": {
    ppg: 7.3,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 6.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.7, 8.2, 8.9, 4.7, 7.8, 4.5, 7.7, 5.9, 6.9, 6.5, 6.7, 7.9, 6.8, 6.6, 4.0, 8.9, 7.9] },
      { year: 2025, ppg: 7.3, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.0, 9.4, 5.8, 6.4, 6.3, 8.2, 9.6, 6.2, 4.1, 8.4, 9.8, 5.9, 10.2, 6.0, 4.4, 6.9, 10.3] },
    ],
  },
  "romeo-doubs-wr": {
    ppg: 5.1,
    seasons: [
      { year: 2023, ppg: 5.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.2, 5.7, 2.3, 9.1, 7.0, 3.9, 7.2, 7.1, 5.7, 4.3, 6.1, 3.5, 3.1, 9.6, 4.8, 5.5, 3.1] },
      { year: 2024, ppg: 6.6, gamesPlayed: 16, gamesMissed: 1, missedReason: "Shoulder injury, Week 12", weekly: [7.8, 10.8, 4.2, 3.2, 3.6, 9.0, 8.7, 8.6, 5.7, 5.7, 6.6, 5.3, 7.6, 3.7, 7.0, 8.1] },
      { year: 2025, ppg: 5.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.1, 2.5, 4.6, 7.8, 7.4, 5.8, 7.4, 6.1, 3.4, 2.6, 4.5, 7.7, 4.7, 4.0, 4.2, 2.7, 5.6] },
    ],
  },
  "jahan-dotson-wr": {
    ppg: 4.2,
    seasons: [
      { year: 2023, ppg: 6.4, gamesPlayed: 15, gamesMissed: 2, missedReason: "Rib injury, Weeks 5-6", weekly: [6.9, 7.5, 9.2, 9.8, 4.2, 7.4, 3.1, 3.4, 4.7, 6.7, 8.3, 4.9, 4.3, 4.1, 11.5] },
      { year: 2024, ppg: 5.6, gamesPlayed: 13, gamesMissed: 4, missedReason: "Quad strain, Weeks 3-6", weekly: [4.7, 4.3, 3.5, 6.8, 5.0, 6.1, 4.2, 4.4, 6.2, 6.8, 7.3, 8.2, 5.3] },
      { year: 2025, ppg: 4.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [3.3, 6.2, 3.3, 4.7, 4.0, 4.9, 4.8, 0.7, 3.3, 3.1, 4.2, 5.0, 1.8, 4.7, 6.8, 5.9, 5.4] },
    ],
  },
  "rashod-bateman-wr": {
    ppg: 6.6,
    seasons: [
      { year: 2023, ppg: 5.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.6, 7.2, 5.1, 6.0, 3.1, 7.6, 8.5, 4.4, 4.9, 7.7, 2.0, 8.0, 7.2, 4.9, 7.1, 6.7, 4.3] },
      { year: 2024, ppg: 6.3, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.8, 3.1, 6.2, 8.5, 6.6, 9.5, 4.7, 4.6, 10.2, 6.5, 6.7, 6.4, 7.1, 3.6, 6.1, 3.6, 6.9] },
      { year: 2025, ppg: 6.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.1, 4.4, 6.9, 2.6, 6.4, 3.8, 7.2, 4.2, 10.4, 8.9, 8.5, 6.1, 9.6, 6.9, 6.4, 6.6, 4.9] },
    ],
  },
  "xavier-legette-wr": {
    ppg: 7.4,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 7.0, gamesPlayed: 15, gamesMissed: 2, missedReason: "Quad strain, Weeks 4-5", weekly: [6.6, 10.9, 4.3, 4.1, 6.2, 8.9, 7.9, 5.9, 9.0, 5.9, 15.4, 5.3, 3.4, 6.0, 5.2] },
      { year: 2025, ppg: 7.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.2, 6.7, 6.1, 8.8, 7.5, 5.5, 8.5, 5.8, 8.0, 7.1, 6.8, 10.3, 7.3, 8.9, 7.3, 7.3, 9.5] },
    ],
  },
  "jerry-jeudy-wr": {
    ppg: 8.3,
    seasons: [
      { year: 2023, ppg: 7.9, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hip injury, Weeks 2-5", weekly: [9.5, 8.3, 7.7, 5.3, 8.0, 8.8, 9.1, 7.1, 9.5, 9.9, 7.4, 3.3, 8.8] },
      { year: 2024, ppg: 7.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.8, 9.5, 8.6, 6.6, 12.6, 5.8, 4.8, 6.3, 4.8, 8.6, 7.3, 9.1, 9.1, 7.8, 3.8, 6.6, 5.3] },
      { year: 2025, ppg: 8.3, gamesPlayed: 12, gamesMissed: 5, missedReason: "Rib injury, Weeks 5-9", weekly: [7.9, 7.2, 11.2, 9.1, 10.3, 10.1, 8.2, 12.5, 8.4, 6.3, 7.4, 1.5] },
    ],
  },
  "marvin-mims-jr-wr": {
    ppg: 8.5,
    seasons: [
      { year: 2023, ppg: 5.3, gamesPlayed: 11, gamesMissed: 6, missedReason: "Rib injury, placed on IR Week 6", weekly: [6.8, 7.8, 7.3, 2.6, 6.6, 4.8, 6.8, 4.8, 4.2, 2.1, 4.5] },
      { year: 2024, ppg: 6.2, gamesPlayed: 16, gamesMissed: 1, missedReason: "Shoulder injury, Week 5", weekly: [6.9, 6.3, 8.7, 8.4, 7.4, 7.7, 3.1, 5.3, 5.9, 8.3, 8.6, 3.4, 5.1, 5.0, 4.1, 5.0] },
      { year: 2025, ppg: 8.5, gamesPlayed: 13, gamesMissed: 4, missedReason: "Quad strain, Weeks 7-10", weekly: [8.1, 12.0, 6.7, 10.7, 7.5, 9.1, 5.4, 10.7, 8.5, 5.0, 9.2, 10.5, 6.6] },
    ],
  },
  "matthew-golden-wr": {
    ppg: 7.0,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 7.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.9, 6.1, 4.7, 7.3, 7.7, 5.7, 10.1, 6.8, 6.2, 7.2, 5.5, 6.6, 5.4, 8.9, 5.9, 9.5, 9.1] },
    ],
  },
  "travis-hunter-wr": {
    ppg: 5.6,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 5.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.7, 4.2, 7.3, 8.8, 7.2, 5.6, 4.2, 7.4, 3.1, 2.6, 3.3, 4.6, 3.0, 4.5, 7.4, 7.0, 7.6] },
    ],
  },
  "tre-tucker-wr": {
    ppg: 6.4,
    seasons: [
      { year: 2023, ppg: 7.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.5, 7.2, 12.1, 4.7, 12.8, 7.0, 7.2, 2.9, 5.7, 5.4, 6.6, 6.0, 7.7, 7.1, 6.5, 5.0, 9.0] },
      { year: 2024, ppg: 7.1, gamesPlayed: 9, gamesMissed: 8, missedReason: "Foot injury, placed on IR Week 2", weekly: [4.9, 7.5, 7.0, 3.6, 7.7, 9.4, 8.6, 6.7, 8.5] },
      { year: 2025, ppg: 6.4, gamesPlayed: 9, gamesMissed: 8, missedReason: "Wrist injury, placed on IR Week 5", weekly: [8.1, 7.8, 3.1, 2.4, 5.4, 9.4, 7.9, 7.6, 5.5] },
    ],
  },
  "tutu-atwell-wr": {
    ppg: 6.4,
    seasons: [
      { year: 2023, ppg: 5.7, gamesPlayed: 14, gamesMissed: 3, missedReason: "Turf toe, Weeks 10-12", weekly: [4.7, 4.0, 3.1, 5.1, 5.6, 8.7, 5.8, 7.4, 4.6, 7.9, 7.8, 4.2, 5.2, 5.7] },
      { year: 2024, ppg: 5.3, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [3.6, 4.4, 5.6, 4.3, 2.4, 3.7, 2.6, 6.5, 6.7, 3.8, 6.1, 6.6, 9.3, 6.9, 7.5, 6.5, 3.6] },
      { year: 2025, ppg: 6.4, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, Weeks 15-16", weekly: [6.0, 6.0, 9.8, 7.3, 9.8, 8.8, 5.9, 4.4, 8.0, 4.8, 2.9, 4.0, 4.2, 7.4, 6.9] },
    ],
  },
  "jauan-jennings-wr": {
    ppg: 5.4,
    seasons: [
      { year: 2023, ppg: 6.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.9, 6.6, 7.1, 3.7, 7.2, 8.2, 5.0, 6.9, 8.1, 3.3, 3.3, 5.5, 4.3, 8.6, 6.7, 7.8, 3.5] },
      { year: 2024, ppg: 5.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.7, 6.1, 5.8, 2.8, 5.5, 6.3, 6.7, 4.3, 3.5, 5.9, 8.1, 5.3, 8.2, 5.5, 3.7, 4.5, 6.6] },
      { year: 2025, ppg: 5.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.3, 3.1, 5.0, 4.3, 3.5, 5.6, 4.8, 6.0, 6.9, 5.0, 10.5, 5.1, 8.0, 6.0, 8.1, 1.0, 4.3] },
    ],
  },
  "kayshon-boutte-wr": {
    ppg: 7.0,
    seasons: [
      { year: 2023, ppg: 5.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.4, 4.5, 3.6, 5.4, 4.6, 9.3, 7.6, 4.7, 5.0, 8.4, 5.3, 3.4, 3.4, 7.6, 8.4, 5.4, 4.2] },
      { year: 2024, ppg: 6.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.4, 9.5, 4.6, 4.6, 8.9, 7.9, 4.1, 6.8, 5.0, 4.1, 3.7, 8.4, 6.4, 10.7, 9.2, 4.5, 6.0] },
      { year: 2025, ppg: 7.0, gamesPlayed: 13, gamesMissed: 4, missedReason: "Foot injury, Weeks 12-15", weekly: [8.3, 2.1, 7.3, 7.0, 5.8, 10.1, 5.8, 7.8, 7.6, 4.7, 7.8, 7.1, 9.0] },
    ],
  },
  "darnell-mooney-wr": {
    ppg: 5.1,
    seasons: [
      { year: 2023, ppg: 6.0, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, Weeks 5-6", weekly: [9.0, 6.2, 5.7, 2.8, 6.7, 6.2, 7.7, 5.2, 5.7, 9.0, 4.4, 5.3, 5.6, 6.7, 3.8] },
      { year: 2024, ppg: 5.0, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hip injury, Weeks 7-8", weekly: [3.9, 3.9, 4.6, 10.4, 9.5, 4.0, 4.0, 3.4, 3.8, 7.3, 3.3, 3.3, 3.2, 7.1, 3.3] },
      { year: 2025, ppg: 5.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [2.3, 7.3, 8.5, 6.8, 5.1, 1.6, 4.9, 5.6, 3.7, 2.9, 7.8, 8.7, 3.6, 5.6, 5.4, 2.0, 4.6] },
    ],
  },
  "hollywood-brown-wr": {
    ppg: 5.5,
    seasons: [
      { year: 2023, ppg: 7.3, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.9, 6.5, 8.0, 4.4, 6.0, 4.4, 5.8, 12.8, 9.6, 6.7, 9.5, 4.9, 10.1, 2.9, 12.1, 6.4, 7.1] },
      { year: 2024, ppg: 6.3, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [3.4, 7.9, 6.8, 7.3, 5.1, 5.4, 4.4, 4.2, 9.0, 11.0, 4.0, 5.5, 2.1, 8.0, 8.3, 7.0, 7.7] },
      { year: 2025, ppg: 5.5, gamesPlayed: 11, gamesMissed: 6, missedReason: "Concussion protocol, placed on IR Week 11", weekly: [5.8, 5.6, 2.8, 5.5, 6.2, 6.5, 5.1, 3.8, 5.9, 4.7, 8.7] },
    ],
  },
  "tory-horton-wr": {
    ppg: 6.2,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 6.2, gamesPlayed: 15, gamesMissed: 2, missedReason: "Concussion protocol, Weeks 10-11", weekly: [6.3, 5.8, 6.3, 6.2, 2.5, 6.9, 4.4, 6.1, 4.9, 10.4, 4.2, 8.2, 7.0, 8.4, 4.9] },
    ],
  },
  "christian-kirk-wr": {
    ppg: 4.6,
    seasons: [
      { year: 2023, ppg: 6.1, gamesPlayed: 11, gamesMissed: 6, missedReason: "Quad strain, placed on IR Week 10", weekly: [3.9, 4.7, 3.1, 9.0, 5.0, 6.4, 8.1, 6.4, 6.8, 8.0, 5.7] },
      { year: 2024, ppg: 5.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [3.0, 7.6, 6.4, 7.5, 3.4, 5.4, 8.9, 3.7, 7.1, 7.4, 3.8, 7.2, 4.4, 2.2, 6.2, 3.6, 5.7] },
      { year: 2025, ppg: 4.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.6, 5.1, 3.0, 3.6, 4.3, 4.3, 3.1, 6.0, 1.7, 8.3, 7.2, 3.2, 6.8, 3.7, 5.7, 6.9, 0.8] },
    ],
  },
  "jalen-mcmillan-wr": {
    ppg: 6.2,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 4.8, gamesPlayed: 9, gamesMissed: 8, missedReason: "Concussion protocol, placed on IR Week 2", weekly: [5.1, 4.6, 3.2, 9.2, 5.3, 4.2, 4.6, 5.0, 2.0] },
      { year: 2025, ppg: 6.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [10.4, 4.0, 3.7, 5.6, 2.5, 7.2, 6.2, 7.2, 7.0, 5.8, 7.5, 3.1, 8.5, 2.3, 9.1, 7.9, 7.1] },
    ],
  },
  "calvin-ridley-wr": {
    ppg: 4.8,
    seasons: [
      { year: 2023, ppg: 6.7, gamesPlayed: 15, gamesMissed: 2, missedReason: "Wrist injury, Weeks 14-15", weekly: [5.1, 8.7, 10.1, 2.9, 7.9, 5.3, 9.1, 6.2, 7.1, 4.0, 9.4, 4.7, 5.1, 8.4, 6.5] },
      { year: 2024, ppg: 5.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.2, 7.0, 4.3, 5.5, 5.9, 7.5, 2.8, 6.2, 6.9, 5.3, 7.2, 3.5, 8.7, 3.4, 6.8, 6.6, 4.8] },
      { year: 2025, ppg: 4.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.6, 2.5, 4.3, 3.7, 5.3, 4.4, 4.5, 4.0, 6.3, 6.8, 4.0, 6.0, 3.4, 4.7, 5.8, 7.0, 4.0] },
    ],
  },
  "stefon-diggs-wr": {
    ppg: 4.8,
    seasons: [
      { year: 2023, ppg: 5.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.7, 5.3, 4.8, 9.5, 5.3, 7.7, 3.2, 6.1, 5.2, 3.4, 5.9, 4.2, 7.5, 5.5, 7.8, 5.7, 7.5] },
      { year: 2024, ppg: 5.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.7, 5.8, 4.4, 5.9, 3.9, 3.4, 5.3, 7.3, 5.8, 7.3, 3.9, 4.4, 7.5, 5.9, 2.8, 3.6, 3.8] },
      { year: 2025, ppg: 4.8, gamesPlayed: 15, gamesMissed: 2, missedReason: "Groin strain, Weeks 9-10", weekly: [5.4, 4.4, 2.1, 5.2, 5.0, 6.6, 4.0, 2.3, 5.2, 7.9, 3.0, 6.7, 4.2, 5.2, 4.2] },
    ],
  },
  "devin-duvernay-wr": {
    ppg: 5.9,
    seasons: [
      { year: 2023, ppg: 5.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.8, 7.8, 4.8, 3.3, 3.6, 4.4, 9.3, 4.4, 9.1, 5.8, 11.8, 5.0, 2.2, 4.2, 4.0, 7.5, 3.9] },
      { year: 2024, ppg: 5.3, gamesPlayed: 16, gamesMissed: 1, missedReason: "Quad strain, Week 2", weekly: [5.9, 6.3, 5.6, 5.1, 5.6, 6.7, 7.0, 2.8, 2.4, 4.0, 4.9, 8.6, 5.0, 3.9, 4.6, 6.4] },
      { year: 2025, ppg: 5.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [3.8, 6.4, 5.2, 6.0, 5.6, 2.2, 7.9, 7.7, 3.3, 9.8, 5.3, 4.8, 6.5, 8.3, 4.2, 8.1, 6.0] },
    ],
  },
  "devontez-walker-wr": {
    ppg: 4.3,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 3.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [3.4, 4.3, 2.7, 5.2, 5.2, 2.1, 2.7, 4.6, 2.9, 1.4, 2.6, 5.1, 4.3, 5.1, 3.8, 6.4, 4.5] },
      { year: 2025, ppg: 4.3, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [3.6, 5.3, 4.6, 3.7, 4.9, 3.7, 2.2, 6.1, 4.6, 2.5, 5.5, 4.4, 1.6, 6.3, 4.4, 5.2, 4.2] },
    ],
  },
  "joshua-palmer-wr": {
    ppg: 4.0,
    seasons: [
      { year: 2023, ppg: 4.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.3, 5.2, 7.6, 4.9, 5.6, 2.7, 4.5, 5.8, 2.6, 2.9, 4.2, 6.4, 4.8, 4.6, 5.0, 6.9, 5.3] },
      { year: 2024, ppg: 4.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.9, 4.7, 6.3, 7.2, 3.9, 5.2, 7.4, 4.9, 3.1, 4.1, 5.4, 3.2, 6.8, 6.4, 2.0, 2.1, 5.7] },
      { year: 2025, ppg: 4.0, gamesPlayed: 12, gamesMissed: 5, missedReason: "Groin strain, Weeks 13-17", weekly: [3.8, 5.9, 4.8, 3.1, 5.0, 4.4, 3.9, 3.9, 1.7, 5.1, 3.4, 3.6] },
    ],
  },
  "andrei-iosivas-wr": {
    ppg: 5.5,
    seasons: [
      { year: 2023, ppg: 5.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.7, 4.6, 8.1, 8.5, 3.8, 4.5, 4.3, 7.8, 8.3, 7.2, 3.9, 5.1, 5.1, 5.4, 6.7, 4.2, 4.1] },
      { year: 2024, ppg: 4.9, gamesPlayed: 15, gamesMissed: 2, missedReason: "Quad strain, Weeks 14-15", weekly: [6.3, 3.6, 5.5, 6.4, 3.7, 5.4, 7.8, 4.5, 2.7, 4.5, 3.3, 6.2, 4.6, 5.9, 3.1] },
      { year: 2025, ppg: 5.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [3.1, 3.7, 6.8, 7.0, 5.2, 6.9, 2.7, 7.3, 2.7, 4.4, 4.7, 5.0, 7.5, 6.0, 5.0, 6.9, 9.0] },
    ],
  },
  "cedric-tillman-wr": {
    ppg: 6.0,
    seasons: [
      { year: 2023, ppg: 4.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.2, 3.3, 3.4, 4.0, 4.4, 3.9, 3.7, 8.5, 2.8, 4.6, 6.0, 3.3, 3.0, 5.7, 4.0, 2.7, 2.9] },
      { year: 2024, ppg: 4.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Ankle sprain, Weeks 6-8", weekly: [6.4, 4.9, 4.5, 3.3, 5.6, 4.6, 4.4, 5.7, 1.5, 5.9, 4.3, 3.8, 5.8, 6.5] },
      { year: 2025, ppg: 6.0, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, Week 8", weekly: [2.8, 6.2, 4.7, 6.7, 3.6, 7.7, 4.5, 3.0, 8.0, 3.6, 9.2, 9.1, 5.4, 8.9, 3.7, 8.7] },
    ],
  },
  "troy-franklin-wr": {
    ppg: 5.1,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 3.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [2.2, 4.5, 2.3, 4.4, 2.0, 4.6, 4.2, 2.9, 2.5, 3.0, 4.3, 4.7, 4.0, 2.2, 2.5, 3.1, 4.4] },
      { year: 2025, ppg: 5.1, gamesPlayed: 9, gamesMissed: 8, missedReason: "Groin strain, placed on IR Week 7", weekly: [5.6, 5.0, 4.5, 6.4, 4.1, 3.9, 4.1, 4.6, 7.8] },
    ],
  },
  "greg-dortch-wr": {
    ppg: 4.1,
    seasons: [
      { year: 2023, ppg: 4.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.8, 4.7, 3.2, 2.1, 4.6, 5.4, 3.3, 4.0, 5.0, 3.2, 3.1, 4.4, 4.3, 5.3, 3.0, 4.6, 2.7] },
      { year: 2024, ppg: 4.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.4, 3.9, 5.7, 4.8, 2.2, 3.3, 3.1, 5.3, 4.4, 3.6, 4.8, 4.5, 2.7, 5.5, 2.4, 3.3, 2.1] },
      { year: 2025, ppg: 4.1, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, Week 7", weekly: [4.7, 3.6, 4.5, 2.4, 2.9, 4.5, 4.4, 3.0, 2.7, 4.3, 5.0, 4.3, 5.0, 5.0, 4.6, 4.2] },
    ],
  },
  "tank-dell-wr": {
    ppg: 4.1,
    seasons: [
      { year: 2023, ppg: 5.4, gamesPlayed: 16, gamesMissed: 1, missedReason: "Groin strain, Week 2", weekly: [11.1, 7.2, 2.4, 4.1, 5.5, 4.0, 4.7, 6.4, 4.9, 5.6, 7.4, 3.6, 3.4, 6.5, 4.9, 4.7] },
      { year: 2024, ppg: 4.7, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, Weeks 8-9", weekly: [5.9, 4.2, 8.4, 5.1, 3.7, 3.3, 5.5, 5.4, 3.6, 3.3, 3.1, 4.6, 5.5, 6.1, 2.8] },
      { year: 2025, ppg: 4.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [0.7, 2.5, 5.2, 3.6, 3.5, 5.2, 6.0, 3.0, 4.7, 2.7, 7.5, 3.3, 5.8, 3.0, 5.2, 7.3, 0.2] },
    ],
  },
  "nick-westbrook-ikhine-wr": {
    ppg: 3.8,
    seasons: [
      { year: 2023, ppg: 4.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [2.3, 5.0, 2.2, 3.7, 5.2, 5.5, 2.6, 3.9, 6.2, 2.6, 3.6, 5.0, 5.1, 4.1, 2.2, 5.2, 5.3] },
      { year: 2024, ppg: 4.7, gamesPlayed: 11, gamesMissed: 6, missedReason: "Ankle sprain, placed on IR Week 3", weekly: [4.9, 4.9, 3.2, 2.7, 5.5, 8.8, 3.9, 3.8, 6.2, 4.8, 3.0] },
      { year: 2025, ppg: 3.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.3, 3.0, 4.2, 4.3, 2.1, 3.4, 4.6, 3.8, 3.1, 3.1, 3.3, 4.1, 3.7, 5.9, 4.7, 3.8, 1.4] },
    ],
  },
  "pat-bryant-wr": {
    ppg: 4.0,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 4.0, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, 2 games", weekly: [2.1, 6.4, 3.0, 0.0, 8.2, 1.5, 5.0, 0.0, 3.3, 7.8, 2.0, 4.5, 9.1, 1.0, 5.5] },
    ],
  },
  "jack-bech-wr": {
    ppg: 1.9,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 1.9, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hamstring strain, 4 games", weekly: [0.0, 1.5, 3.2, 0.0, 5.1, 2.0, 0.5, 4.4, 1.8, 0.0, 3.6, 2.2, 1.0] },
    ],
  },
  "isaiah-bond-wr": {
    ppg: 1.8,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 1.8, gamesPlayed: 12, gamesMissed: 5, missedReason: "Practice squad early season, promoted Week 6", weekly: [0.0, 0.0, 0.5, 3.4, 1.2, 0.0, 2.8, 4.1, 0.0, 1.5, 5.0, 2.9] },
    ],
  },
  "jalin-hyatt-wr": {
    ppg: 2.7,
    seasons: [
      { year: 2023, ppg: 1.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Healthy scratch, 2 games", weekly: [1.7, 0.8, 1.1, 1.0, 0.8, 1.9, 0.8, 2.3, 2.1, 1.6, 1.2, 1.2, 1.7, 3.0, 1.3] },
      { year: 2024, ppg: 2.2, gamesPlayed: 16, gamesMissed: 1, missedReason: "Concussion, 1 game", weekly: [2.5, 1.4, 2.0, 0.8, 1.9, 2.4, 4.6, 1.8, 1.8, 1.8, 1.7, 3.2, 2.2, 2.2, 1.6, 3.3] },
      { year: 2025, ppg: 2.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [1.0, 1.5, 4.2, 2.0, 2.8, 5.5, 1.0, 1.5, 3.3, 6.1, 2.0, 0.5, 4.8, 1.2, 2.0, 3.9, 2.5] },
    ],
  },
  "arian-smith-wr": {
    ppg: 1.8,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 1.2, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, 3 games", weekly: [1.4, 1.5, 1.6, 1.2, 1.4, 0.7, 1.5, 0.4, 1.4, 1.2, 1.6, 0.8, 1.3, 0.8] },
      { year: 2025, ppg: 1.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Quad injury, 1 game", weekly: [0.0, 3.5, 1.0, 0.5, 4.2, 0.0, 2.8, 1.5, 0.0, 5.0, 2.2, 0.8, 3.6, 1.0, 0.0, 2.9] },
    ],
  },
  "konata-mumpfield-wr": {
    ppg: 1.4,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 1.4, gamesPlayed: 11, gamesMissed: 6, missedReason: "Practice squad most of season", weekly: [0.0, 0.0, 2.5, 1.0, 0.0, 3.8, 0.5, 2.0, 0.0, 4.1, 1.6] },
    ],
  },
  "jordan-whittington-wr": {
    ppg: 2.2,
    seasons: [
      { year: 2023, ppg: 1.0, gamesPlayed: 13, gamesMissed: 4, missedReason: "Knee injury, 4 games", weekly: [0.9, 1.6, 1.2, 0.6, 0.4, 1.2, 0.8, 1.3, 1.2, 0.9, 0.7, 0.7, 1.5] },
      { year: 2024, ppg: 1.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, 1 game", weekly: [2.9, 1.5, 1.4, 1.6, 2.8, 2.8, 2.0, 1.6, 1.3, 1.2, 0.8, 1.2, 2.7, 1.4, 1.6, 2.0] },
      { year: 2025, ppg: 2.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [0.5, 3.2, 1.0, 4.5, 0.0, 2.8, 1.5, 5.0, 0.8, 3.3, 0.0, 2.0, 4.8, 1.2, 0.5, 3.6, 2.0] },
    ],
  },
  "skyy-moore-wr": {
    ppg: 2.4,
    seasons: [
      { year: 2023, ppg: 1.5, gamesPlayed: 10, gamesMissed: 7, missedReason: "Knee injury, 7 games", weekly: [1.1, 1.4, 0.8, 2.6, 1.8, 1.6, 1.3, 1.5, 1.9, 1.0] },
      { year: 2024, ppg: 2.0, gamesPlayed: 15, gamesMissed: 2, missedReason: "Healthy scratch, 2 games", weekly: [1.3, 2.0, 1.9, 1.5, 2.8, 1.2, 2.6, 1.9, 1.4, 2.3, 2.2, 2.5, 1.5, 2.5, 2.4] },
      { year: 2025, ppg: 2.4, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hamstring strain, 1 game", weekly: [1.0, 4.0, 0.5, 3.2, 2.8, 0.0, 5.5, 1.5, 2.0, 4.8, 0.0, 3.0, 1.2, 5.0, 0.8, 2.7] },
    ],
  },
  "keandre-lambert-smith-wr": {
    ppg: 1.9,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 1.0, gamesPlayed: 12, gamesMissed: 5, missedReason: "Practice squad early season", weekly: [0.8, 1.4, 0.9, 1.0, 1.3, 1.2, 0.6, 1.3, 1.2, 0.8, 0.8, 0.7] },
      { year: 2025, ppg: 1.9, gamesPlayed: 15, gamesMissed: 2, missedReason: "Groin injury, 2 games", weekly: [0.0, 2.5, 1.0, 3.8, 0.5, 0.0, 4.2, 1.5, 2.8, 0.0, 3.5, 1.2, 0.8, 5.0, 1.7] },
    ],
  },
  "ashton-dulin-wr": {
    ppg: 1.6,
    seasons: [
      { year: 2023, ppg: 1.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [0.4, 2.4, 1.5, 1.6, 1.1, 0.5, 1.3, 1.4, 1.4, 1.7, 1.3, 0.9, 0.8, 1.3, 1.0, 1.1, 0.7] },
      { year: 2024, ppg: 1.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Concussion, 1 game", weekly: [1.6, 1.3, 2.0, 2.1, 2.2, 1.4, 1.7, 1.7, 1.8, 1.3, 0.9, 0.8, 1.6, 1.1, 1.3, 1.2] },
      { year: 2025, ppg: 1.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [0.5, 2.8, 1.0, 0.0, 3.2, 1.5, 0.8, 2.0, 0.0, 4.0, 1.2, 2.5, 0.5, 3.5, 1.0, 0.8, 2.7] },
    ],
  },
  "anthony-gould-wr": {
    ppg: 1.5,
    seasons: [
      { year: 2023, ppg: 0.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, 3 games", weekly: [1.2, 0.7, 0.7, 0.6, 0.7, 0.5, 0.5, 1.4, 0.9, 1.0, 0.8, 0.5, 1.0, 0.7] },
      { year: 2024, ppg: 1.2, gamesPlayed: 16, gamesMissed: 1, missedReason: "Healthy scratch, 1 game", weekly: [1.3, 1.5, 1.5, 1.7, 0.9, 0.8, 1.6, 0.9, 2.1, 0.8, 0.6, 0.5, 1.1, 1.1, 1.1, 1.7] },
      { year: 2025, ppg: 1.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [0.0, 2.5, 0.5, 1.8, 0.0, 3.0, 1.0, 0.5, 2.2, 0.0, 1.5, 3.5, 0.8, 0.0, 2.0, 1.2, 4.5] },
    ],
  },
  "bub-means-wr": {
    ppg: 2.2,
    seasons: [
      { year: 2023, ppg: 1.4, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, 2 games", weekly: [0.9, 1.0, 2.0, 1.9, 1.7, 2.4, 1.6, 2.1, 0.7, 1.2, 0.9, 1.1, 0.5, 1.4, 1.6] },
      { year: 2024, ppg: 2.0, gamesPlayed: 16, gamesMissed: 1, missedReason: "Quad injury, 1 game", weekly: [2.1, 2.6, 2.4, 1.7, 2.0, 0.8, 1.5, 1.7, 3.3, 1.4, 2.3, 1.9, 1.8, 3.1, 2.2, 1.2] },
      { year: 2025, ppg: 2.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [1.0, 3.5, 0.5, 4.2, 2.0, 0.0, 5.0, 1.5, 2.8, 0.8, 3.6, 0.0, 4.5, 1.2, 2.0, 3.0, 1.9] },
    ],
  },
  "mason-tipton-wr": {
    ppg: 1.3,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.6, gamesPlayed: 10, gamesMissed: 7, missedReason: "Practice squad most of season", weekly: [0.8, 0.8, 0.6, 0.3, 0.8, 0.5, 0.3, 0.9, 0.5, 0.5] },
      { year: 2025, ppg: 1.3, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, 3 games", weekly: [0.0, 1.5, 0.0, 2.8, 0.5, 1.0, 0.0, 3.2, 0.8, 1.5, 0.0, 2.0, 1.2, 3.7] },
    ],
  },
  "ja-lynn-polk-wr": {
    ppg: 2.2,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 1.8, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, 2 games", weekly: [1.2, 1.9, 2.1, 1.5, 1.4, 1.6, 1.2, 1.7, 1.6, 2.5, 1.7, 2.1, 1.3, 2.6, 2.6] },
      { year: 2025, ppg: 2.2, gamesPlayed: 16, gamesMissed: 1, missedReason: "Concussion, 1 game", weekly: [0.5, 3.0, 1.5, 0.0, 4.2, 2.0, 0.8, 3.5, 0.0, 2.8, 1.0, 5.0, 0.5, 2.2, 1.5, 6.5] },
    ],
  },
  "demario-douglas-wr": {
    ppg: 3.8,
    seasons: [
      { year: 2023, ppg: 2.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Concussion, 1 game", weekly: [2.3, 2.2, 1.9, 1.8, 3.5, 2.1, 1.4, 4.1, 5.1, 1.7, 1.3, 1.4, 2.0, 3.2, 2.1, 3.9] },
      { year: 2024, ppg: 3.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [3.6, 2.7, 4.6, 2.0, 2.0, 5.2, 1.9, 4.0, 4.3, 1.4, 3.2, 3.0, 4.5, 2.9, 3.0, 4.0, 2.1] },
      { year: 2025, ppg: 3.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hamstring strain, 1 game", weekly: [1.0, 5.5, 2.0, 6.2, 3.5, 0.5, 8.0, 2.8, 4.5, 1.5, 7.0, 3.0, 5.8, 2.2, 0.8, 6.5] },
    ],
  },
  "van-jefferson-wr": {
    ppg: 2.1,
    seasons: [
      { year: 2023, ppg: 2.0, gamesPlayed: 16, gamesMissed: 1, missedReason: "Knee injury, 1 game", weekly: [2.6, 2.6, 1.3, 1.8, 2.5, 2.5, 1.9, 1.5, 2.4, 1.6, 2.5, 1.8, 1.5, 2.1, 1.9, 1.5] },
      { year: 2024, ppg: 2.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [2.5, 2.9, 1.2, 2.5, 3.0, 1.9, 1.5, 2.1, 2.5, 1.9, 2.5, 3.2, 2.8, 2.5, 3.0, 1.6, 3.2] },
      { year: 2025, ppg: 2.1, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, 2 games", weekly: [0.5, 3.5, 1.0, 4.0, 0.0, 2.5, 1.5, 3.8, 0.8, 2.0, 0.0, 4.5, 1.2, 2.8, 3.4] },
    ],
  },
  "chimere-dike-wr": {
    ppg: 2.3,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 1.1, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hamstring strain, 4 games", weekly: [0.9, 0.8, 0.8, 1.5, 1.5, 1.2, 1.7, 0.7, 1.2, 0.9, 0.7, 0.9, 1.5] },
      { year: 2025, ppg: 2.3, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, 1 game", weekly: [0.0, 3.2, 1.5, 4.5, 0.5, 2.0, 0.8, 5.0, 1.2, 3.5, 0.0, 2.8, 1.0, 4.2, 0.5, 5.6] },
    ],
  },
  "dareke-young-wr": {
    ppg: 1.6,
    seasons: [
      { year: 2023, ppg: 1.0, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, 3 games", weekly: [0.9, 0.8, 1.0, 1.1, 1.5, 0.7, 0.8, 0.8, 0.8, 1.5, 1.0, 1.0, 1.3, 0.8] },
      { year: 2024, ppg: 1.3, gamesPlayed: 16, gamesMissed: 1, missedReason: "Healthy scratch, 1 game", weekly: [0.9, 1.3, 1.2, 1.3, 2.4, 2.0, 1.3, 2.2, 1.5, 0.6, 1.2, 1.1, 0.7, 1.1, 0.5, 1.5] },
      { year: 2025, ppg: 1.6, gamesPlayed: 15, gamesMissed: 2, missedReason: "Quad injury, 2 games", weekly: [0.0, 2.5, 0.5, 3.0, 1.0, 0.0, 2.8, 1.2, 0.5, 3.5, 0.8, 2.0, 0.0, 4.0, 1.7] },
    ],
  },
  "jaylin-noel-wr": {
    ppg: 2.8,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 1.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Concussion, 1 game", weekly: [1.7, 2.2, 2.0, 2.1, 1.4, 1.0, 2.1, 1.2, 1.3, 1.3, 1.5, 1.2, 1.0, 1.8, 1.5, 0.7] },
      { year: 2025, ppg: 2.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [0.5, 4.0, 1.5, 5.2, 2.0, 0.0, 3.8, 1.2, 6.0, 0.8, 2.5, 4.5, 1.0, 3.2, 0.5, 5.5, 5.0] },
    ],
  },
  "zay-jones-wr": {
    ppg: 1.4,
    seasons: [
      { year: 2023, ppg: 2.0, gamesPlayed: 13, gamesMissed: 4, missedReason: "Knee injury, 4 games", weekly: [1.2, 2.3, 2.4, 2.2, 2.1, 1.3, 2.2, 1.3, 1.4, 2.7, 2.7, 1.8, 2.4] },
      { year: 2024, ppg: 1.6, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hamstring strain, 1 game", weekly: [0.9, 1.7, 1.5, 1.9, 1.3, 1.8, 0.9, 2.4, 1.6, 1.6, 1.5, 2.3, 1.0, 1.2, 1.8, 2.2] },
      { year: 2025, ppg: 1.4, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, 2 games", weekly: [0.0, 2.5, 0.5, 1.8, 0.0, 3.0, 0.8, 1.2, 0.0, 2.8, 0.5, 1.5, 0.0, 3.5, 2.9] },
    ],
  },
  "simi-fehoko-wr": {
    ppg: 1.2,
    seasons: [
      { year: 2023, ppg: 0.8, gamesPlayed: 12, gamesMissed: 5, missedReason: "Practice squad part of season", weekly: [1.1, 0.8, 0.5, 1.0, 0.6, 1.0, 0.7, 0.6, 0.7, 0.6, 0.8, 1.2] },
      { year: 2024, ppg: 1.0, gamesPlayed: 15, gamesMissed: 2, missedReason: "Healthy scratch, 2 games", weekly: [1.3, 1.0, 1.0, 1.0, 0.9, 0.8, 1.0, 1.2, 0.7, 1.2, 0.8, 1.5, 0.6, 0.9, 1.1] },
      { year: 2025, ppg: 1.2, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, 3 games", weekly: [0.0, 2.0, 0.5, 1.5, 0.0, 2.5, 0.8, 0.0, 1.8, 2.2, 0.5, 1.0, 0.0, 4.0] },
    ],
  },
  "ray-ray-mccloud-iii-wr": {
    ppg: 1.7,
    seasons: [
      { year: 2023, ppg: 1.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Concussion, 1 game", weekly: [2.1, 1.8, 1.3, 1.8, 1.3, 2.4, 1.3, 2.4, 2.1, 1.4, 1.5, 1.0, 2.4, 3.4, 1.6, 1.0] },
      { year: 2024, ppg: 2.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [2.3, 2.6, 2.1, 2.4, 2.4, 1.2, 1.4, 2.4, 1.9, 3.3, 1.3, 1.5, 1.8, 2.0, 2.9, 0.8, 1.7] },
      { year: 2025, ppg: 1.7, gamesPlayed: 16, gamesMissed: 1, missedReason: "Quad injury, 1 game", weekly: [0.5, 2.5, 1.0, 3.0, 0.0, 2.2, 1.5, 0.8, 3.5, 0.0, 2.0, 1.2, 0.5, 4.0, 1.5, 3.0] },
    ],
  },
  "casey-washington-wr": {
    ppg: 1.3,
    seasons: [
      { year: 2023, ppg: 0.5, gamesPlayed: 9, gamesMissed: 8, missedReason: "Practice squad most of season", weekly: [0.4, 0.1, 0.4, 0.7, 0.6, 0.5, 0.7, 0.7, 0.4] },
      { year: 2024, ppg: 0.9, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, 3 games", weekly: [0.9, 0.6, 1.0, 0.7, 1.0, 1.2, 0.9, 1.8, 0.6, 0.9, 1.3, 0.9, 0.5, 0.3] },
      { year: 2025, ppg: 1.3, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, 2 games", weekly: [0.0, 1.5, 0.5, 2.0, 0.0, 1.8, 0.8, 0.0, 2.5, 1.2, 0.5, 3.0, 0.0, 2.2, 3.5] },
    ],
  },
  "tylan-wallace-wr": {
    ppg: 1.6,
    seasons: [
      { year: 2023, ppg: 1.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Healthy scratch, 1 game", weekly: [1.9, 1.4, 1.7, 1.5, 1.6, 1.1, 1.7, 2.0, 0.8, 1.3, 1.4, 1.5, 1.5, 1.5, 1.2, 1.9] },
      { year: 2024, ppg: 1.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [2.2, 1.3, 1.2, 2.1, 1.2, 0.7, 2.7, 0.6, 1.2, 2.4, 2.1, 1.2, 2.0, 2.5, 3.6, 1.1, 2.5] },
      { year: 2025, ppg: 1.6, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hamstring strain, 1 game", weekly: [0.5, 2.5, 1.0, 3.0, 0.0, 2.2, 1.5, 0.8, 2.8, 0.0, 3.5, 1.2, 0.5, 2.0, 1.0, 3.1] },
    ],
  },
  "lajohntay-wester-wr": {
    ppg: 1.0,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 1.0, gamesPlayed: 12, gamesMissed: 5, missedReason: "Practice squad early season", weekly: [0.0, 1.5, 0.5, 2.0, 0.0, 1.2, 0.8, 0.0, 2.5, 0.5, 1.0, 2.0] },
    ],
  },
  "david-moore-wr": {
    ppg: 1.2,
    seasons: [
      { year: 2023, ppg: 1.8, gamesPlayed: 12, gamesMissed: 5, missedReason: "Hamstring strain, 5 games", weekly: [1.8, 1.2, 2.0, 1.9, 0.8, 2.2, 1.3, 2.2, 1.4, 2.3, 1.2, 3.3] },
      { year: 2024, ppg: 1.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, 2 games", weekly: [1.7, 1.3, 1.4, 1.6, 0.7, 1.3, 0.8, 1.5, 1.6, 0.9, 1.6, 1.8, 2.8, 1.8, 1.7] },
      { year: 2025, ppg: 1.2, gamesPlayed: 13, gamesMissed: 4, missedReason: "Quad injury, 4 games", weekly: [0.0, 2.0, 0.5, 1.8, 0.0, 2.5, 0.8, 1.0, 0.0, 2.2, 1.5, 0.8, 2.5] },
    ],
  },
  "equanimeous-st-brown-wr": {
    ppg: 1.3,
    seasons: [
      { year: 2023, ppg: 1.6, gamesPlayed: 15, gamesMissed: 2, missedReason: "Concussion, 2 games", weekly: [2.0, 2.2, 1.5, 1.8, 0.6, 0.7, 1.8, 1.0, 1.8, 2.4, 2.1, 2.1, 1.4, 1.3, 1.3] },
      { year: 2024, ppg: 1.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [1.7, 1.1, 1.6, 0.8, 2.2, 1.3, 1.7, 0.7, 1.2, 1.7, 1.8, 1.4, 1.6, 1.8, 0.8, 1.7, 0.7] },
      { year: 2025, ppg: 1.3, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hamstring strain, 1 game", weekly: [0.0, 2.0, 0.5, 1.5, 0.0, 2.2, 0.8, 1.0, 0.0, 2.5, 1.2, 0.5, 2.0, 0.8, 1.5, 4.3] },
    ],
  },
  "tyler-scott-wr": {
    ppg: 1.4,
    seasons: [
      { year: 2023, ppg: 0.6, gamesPlayed: 10, gamesMissed: 7, missedReason: "Practice squad most of season", weekly: [0.7, 0.3, 0.4, 0.7, 0.8, 0.5, 0.8, 0.4, 0.9, 0.5] },
      { year: 2024, ppg: 1.0, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, 3 games", weekly: [1.1, 0.7, 1.1, 1.3, 0.8, 1.1, 1.2, 1.3, 1.0, 0.4, 1.0, 1.0, 0.8, 1.2] },
      { year: 2025, ppg: 1.4, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, 2 games", weekly: [0.0, 2.0, 0.5, 1.8, 0.0, 2.5, 1.0, 0.5, 2.2, 0.0, 1.5, 3.0, 0.8, 2.2, 3.0] },
    ],
  },
  "charlie-jones-wr": {
    ppg: 1.7,
    seasons: [
      { year: 2023, ppg: 0.7, gamesPlayed: 9, gamesMissed: 8, missedReason: "Practice squad most of season", weekly: [0.5, 0.8, 0.9, 0.7, 0.7, 0.6, 0.8, 0.7, 0.6] },
      { year: 2024, ppg: 1.2, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, 2 games", weekly: [0.7, 0.8, 1.5, 0.9, 1.9, 1.2, 1.8, 1.6, 0.7, 0.8, 0.8, 0.9, 1.6, 1.4, 1.4] },
      { year: 2025, ppg: 1.7, gamesPlayed: 16, gamesMissed: 1, missedReason: "Concussion, 1 game", weekly: [0.0, 2.5, 1.0, 3.0, 0.5, 2.2, 0.0, 1.8, 3.5, 0.8, 2.0, 0.0, 4.0, 1.5, 2.4, 2.0] },
    ],
  },
  "jermaine-burton-wr": {
    ppg: 1.5,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.9, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hamstring strain, 4 games", weekly: [0.6, 1.1, 1.1, 0.7, 0.7, 0.5, 1.2, 0.6, 1.1, 0.9, 0.8, 1.0, 1.4] },
      { year: 2025, ppg: 1.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, 1 game", weekly: [0.0, 2.5, 0.5, 2.0, 0.0, 3.0, 1.0, 0.5, 2.8, 0.0, 1.5, 3.5, 0.8, 2.2, 0.7, 3.0] },
    ],
  },
  "beaux-collins-wr": {
    ppg: 1.1,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.4, gamesPlayed: 7, gamesMissed: 10, missedReason: "Practice squad most of season", weekly: [0.2, 0.3, 0.5, 0.8, 0.3, 0.3, 0.4] },
      { year: 2025, ppg: 1.1, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hamstring strain, 4 games", weekly: [0.0, 1.5, 0.5, 2.0, 0.0, 1.8, 0.8, 0.0, 2.2, 1.0, 0.5, 1.5, 2.5] },
    ],
  },
  "dont-e-thornton-jr-wr": {
    ppg: 1.8,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 1.0, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, 3 games", weekly: [0.5, 0.6, 0.9, 1.3, 0.8, 1.0, 1.3, 1.0, 0.4, 1.4, 1.4, 0.8, 1.6, 1.0] },
      { year: 2025, ppg: 1.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, 1 game", weekly: [0.0, 3.0, 1.0, 3.5, 0.5, 2.5, 0.0, 4.0, 1.2, 2.8, 0.0, 3.5, 1.5, 2.0, 0.8, 2.5] },
    ],
  },
  "erik-ezukanma-wr": {
    ppg: 0.9,
    seasons: [
      { year: 2023, ppg: 0.5, gamesPlayed: 8, gamesMissed: 9, missedReason: "Hamstring strain, season-ending", weekly: [0.4, 0.3, 0.9, 0.4, 0.4, 0.5, 0.6, 0.5] },
      { year: 2024, ppg: 0.7, gamesPlayed: 11, gamesMissed: 6, missedReason: "Practice squad part of season", weekly: [0.7, 0.6, 0.7, 0.8, 0.3, 0.9, 0.8, 0.9, 0.8, 0.7, 0.5] },
      { year: 2025, ppg: 0.9, gamesPlayed: 13, gamesMissed: 4, missedReason: "Ankle sprain, 4 games", weekly: [0.0, 1.5, 0.0, 2.0, 0.5, 0.0, 1.8, 0.0, 1.2, 0.5, 1.5, 0.0, 2.7] },
    ],
  },
  "tarik-black-wr": {
    ppg: 0.8,
    seasons: [
      { year: 2023, ppg: 0.3, gamesPlayed: 6, gamesMissed: 11, missedReason: "Practice squad most of season", weekly: [0.4, 0.1, 0.4, 0.2, 0.5, 0.2] },
      { year: 2024, ppg: 0.6, gamesPlayed: 10, gamesMissed: 7, missedReason: "Hamstring strain, 7 games", weekly: [0.5, 0.3, 0.7, 1.1, 0.5, 0.9, 0.2, 0.7, 0.5, 0.6] },
      { year: 2025, ppg: 0.8, gamesPlayed: 12, gamesMissed: 5, missedReason: "Ankle sprain, 5 games", weekly: [0.0, 1.5, 0.0, 1.2, 0.5, 0.0, 1.8, 0.0, 1.0, 0.5, 1.2, 1.9] },
    ],
  },
  "braylon-sanders-wr": {
    ppg: 0.7,
    seasons: [
      { year: 2023, ppg: 0.2, gamesPlayed: 4, gamesMissed: 13, missedReason: "Practice squad most of season", weekly: [0.2, 0.2, 0.3, 0.1] },
      { year: 2024, ppg: 0.5, gamesPlayed: 9, gamesMissed: 8, missedReason: "Practice squad part of season", weekly: [0.8, 0.3, 0.4, 0.5, 0.3, 0.8, 0.7, 0.5, 0.2] },
      { year: 2025, ppg: 0.7, gamesPlayed: 11, gamesMissed: 6, missedReason: "Hamstring strain, 6 games", weekly: [0.0, 1.0, 0.0, 1.5, 0.5, 0.0, 1.2, 0.0, 0.8, 0.5, 2.2] },
    ],
  },
  "jaylin-lane-wr": {
    ppg: 1.0,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 1.0, gamesPlayed: 10, gamesMissed: 7, missedReason: "Practice squad early season, healthy scratches", weekly: [0.0, 1.5, 0.5, 2.0, 0.0, 1.2, 0.8, 1.5, 0.0, 2.5] },
    ],
  },
  "ryan-miller-wr": {
    ppg: 0.6,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.3, gamesPlayed: 5, gamesMissed: 12, missedReason: "Practice squad most of season", weekly: [0.4, 0.3, 0.2, 0.2, 0.4] },
      { year: 2025, ppg: 0.6, gamesPlayed: 9, gamesMissed: 8, missedReason: "Practice squad part of season, healthy scratches", weekly: [0.0, 1.0, 0.0, 1.2, 0.5, 0.0, 0.8, 0.4, 1.5] },
    ],
  },
  "rashid-shaheed-wr": {
    ppg: 4.4,
    seasons: [
      { year: 2023, ppg: 6.5, gamesPlayed: 12, gamesMissed: 5, missedReason: "Knee injury, 5 games", weekly: [4.3, 7.4, 10.0, 5.9, 6.8, 6.4, 6.5, 7.2, 3.4, 6.2, 7.1, 6.8] },
      { year: 2024, ppg: 5.0, gamesPlayed: 15, gamesMissed: 2, missedReason: "Quad strain, 2 games", weekly: [5.0, 2.2, 9.7, 6.2, 5.1, 5.2, 3.4, 3.3, 3.8, 4.8, 8.3, 4.7, 2.9, 6.8, 3.6] },
      { year: 2025, ppg: 4.4, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring, 3 games", weekly: [2.0, 7.5, 3.3, 0.0, 9.8, 4.1, 2.6, 6.0, 3.9, 5.5, 0.0, 8.2, 4.7, 4.0] },
    ],
  },
  "tre-harris-wr": {
    ppg: 5.7,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 5.7, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, 2 games", weekly: [3.2, 1.5, 8.4, 6.1, 0.0, 12.3, 4.5, 2.8, 9.6, 5.0, 3.3, 7.8, 6.2, 10.1, 4.7] },
    ],
  },
  "jalen-nailor-wr": {
    ppg: 4.8,
    seasons: [
      { year: 2023, ppg: 4.2, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, 1 game", weekly: [3.8, 3.1, 2.8, 4.1, 3.1, 4.7, 4.9, 6.3, 3.0, 5.2, 3.5, 6.6, 3.6, 6.5, 3.1, 2.9] },
      { year: 2024, ppg: 5.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [3.9, 5.1, 2.9, 4.1, 6.3, 6.6, 4.1, 3.4, 6.3, 4.4, 6.2, 3.9, 6.8, 5.9, 6.6, 4.5, 5.7] },
      { year: 2025, ppg: 4.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Knee soreness, 1 game", weekly: [2.1, 6.4, 3.3, 8.9, 1.5, 5.0, 4.4, 0.0, 7.2, 3.8, 6.6, 2.9, 9.1, 4.0, 5.5, 6.3] },
    ],
  },
  "bryce-lance-wr": {
    ppg: 3.1,
    seasons: [
      { year: 2023, ppg: 1.8, gamesPlayed: 6, gamesMissed: 11, missedReason: "Practice squad most of season", weekly: [2.3, 1.6, 1.1, 1.8, 2.3, 1.7] },
      { year: 2024, ppg: 2.5, gamesPlayed: 10, gamesMissed: 7, missedReason: "Healthy scratch, then hamstring", weekly: [2.1, 2.5, 1.9, 4.5, 2.2, 2.1, 2.9, 1.9, 2.6, 2.3] },
      { year: 2025, ppg: 3.1, gamesPlayed: 13, gamesMissed: 4, missedReason: "Groin strain, 4 games", weekly: [0.0, 1.2, 4.5, 2.8, 0.0, 6.1, 3.3, 1.9, 5.0, 2.2, 3.6, 4.8, 4.9] },
    ],
  },
  "odell-beckham-jr-wr": {
    ppg: 3.2,
    seasons: [
      { year: 2023, ppg: 3.5, gamesPlayed: 9, gamesMissed: 8, missedReason: "Achilles recovery, limited snaps", weekly: [5.6, 3.1, 4.2, 3.0, 3.4, 4.3, 2.1, 2.4, 3.4] },
      { year: 2024, ppg: 4.0, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hamstring, 4 games", weekly: [5.0, 6.0, 3.7, 2.6, 5.3, 2.7, 3.5, 3.5, 2.7, 4.5, 3.5, 5.9, 3.1] },
      { year: 2025, ppg: 3.2, gamesPlayed: 11, gamesMissed: 6, missedReason: "Knee injury, 6 games", weekly: [1.5, 5.0, 0.0, 6.3, 2.8, 4.1, 3.5, 0.0, 7.2, 2.9, 1.9] },
    ],
  },
  "adonai-mitchell-wr": {
    ppg: 5.5,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 4.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, 1 game", weekly: [3.0, 4.6, 2.6, 6.0, 5.4, 6.1, 3.5, 2.8, 3.9, 6.0, 5.0, 5.8, 4.4, 4.1, 4.8, 4.0] },
      { year: 2025, ppg: 5.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [2.1, 6.5, 4.0, 8.8, 3.3, 5.5, 1.9, 7.2, 4.6, 6.0, 3.5, 9.1, 2.8, 5.0, 7.6, 4.4, 11.2] },
    ],
  },
  "roman-wilson-wr": {
    ppg: 4.6,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 2.8, gamesPlayed: 8, gamesMissed: 9, missedReason: "Hamstring/knee, missed half the season", weekly: [2.2, 2.6, 2.3, 3.1, 4.4, 1.8, 3.4, 2.6] },
      { year: 2025, ppg: 4.6, gamesPlayed: 15, gamesMissed: 2, missedReason: "Concussion, 2 games", weekly: [1.8, 5.5, 3.2, 7.9, 2.0, 6.4, 4.1, 0.0, 8.8, 3.5, 5.0, 2.9, 6.6, 4.3, 7.0] },
    ],
  },
  "cooper-kupp-wr": {
    ppg: 4.5,
    seasons: [
      { year: 2023, ppg: 8.5, gamesPlayed: 10, gamesMissed: 7, missedReason: "Hamstring/ankle injuries, missed 7 games", weekly: [10.5, 5.6, 9.3, 7.1, 10.5, 7.5, 10.1, 9.2, 11.3, 3.9] },
      { year: 2024, ppg: 6.0, gamesPlayed: 12, gamesMissed: 5, missedReason: "Knee injury, 5 games", weekly: [3.9, 3.7, 7.0, 7.6, 6.5, 6.3, 2.1, 6.4, 6.2, 8.5, 8.3, 5.5] },
      { year: 2025, ppg: 4.5, gamesPlayed: 14, gamesMissed: 3, missedReason: "Ankle, 3 games; reduced role", weekly: [2.0, 6.5, 3.5, 8.0, 1.5, 5.5, 4.0, 7.2, 2.8, 6.0, 3.3, 5.8, 2.5, 4.4] },
    ],
  },
  "jacob-cowing-wr": {
    ppg: 4.0,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 2.2, gamesPlayed: 12, gamesMissed: 5, missedReason: "Hamstring, then healthy scratch", weekly: [3.1, 3.0, 1.5, 1.6, 2.4, 2.8, 2.2, 2.0, 1.4, 2.6, 1.6, 2.2] },
      { year: 2025, ppg: 4.0, gamesPlayed: 16, gamesMissed: 1, missedReason: "Illness, 1 game", weekly: [1.5, 5.5, 2.8, 6.6, 3.0, 0.0, 7.1, 4.4, 2.2, 5.8, 3.9, 6.0, 1.8, 7.5, 3.4, 2.5] },
    ],
  },
  "elic-ayomanor-wr": {
    ppg: 4.8,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 4.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Shoulder, 1 game", weekly: [2.0, 6.5, 3.5, 8.8, 1.9, 5.5, 4.0, 0.0, 9.2, 3.3, 6.0, 2.8, 7.5, 4.4, 6.6, 5.4] },
    ],
  },
  "treylon-burks-wr": {
    ppg: 4.8,
    seasons: [
      { year: 2023, ppg: 4.0, gamesPlayed: 11, gamesMissed: 6, missedReason: "Toe injury, 6 games", weekly: [2.5, 5.1, 5.2, 2.4, 3.8, 2.7, 3.8, 5.9, 4.4, 3.7, 4.5] },
      { year: 2024, ppg: 3.5, gamesPlayed: 9, gamesMissed: 8, missedReason: "Hamstring/concussion, missed 8 games", weekly: [3.8, 5.1, 4.5, 3.6, 3.7, 2.1, 1.4, 2.4, 4.9] },
      { year: 2025, ppg: 4.8, gamesPlayed: 13, gamesMissed: 4, missedReason: "Knee, 4 games", weekly: [2.0, 6.5, 3.5, 8.0, 1.8, 5.5, 4.0, 7.2, 2.9, 6.0, 3.3, 5.8, 5.9] },
    ],
  },
  "keenan-allen-wr": {
    ppg: 4.5,
    seasons: [
      { year: 2023, ppg: 11.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Heel injury, 2 games", weekly: [16.3, 21.8, 12.9, 15.0, 4.4, 10.0, 13.5, 7.1, 8.4, 8.9, 8.0, 13.6, 7.6, 14.6, 10.4] },
      { year: 2024, ppg: 7.0, gamesPlayed: 10, gamesMissed: 7, missedReason: "Heel/hamstring, missed 7 games", weekly: [7.2, 8.1, 2.2, 7.2, 9.4, 5.5, 8.3, 7.7, 7.5, 6.9] },
      { year: 2025, ppg: 4.5, gamesPlayed: 12, gamesMissed: 5, missedReason: "Knee injury, 5 games; reduced role", weekly: [2.0, 6.5, 3.5, 7.8, 1.9, 5.5, 4.0, 6.6, 2.8, 5.9, 3.3, 4.2] },
    ],
  },
  "curtis-samuel-wr": {
    ppg: 4.2,
    seasons: [
      { year: 2023, ppg: 8.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Groin, 2 games", weekly: [8.9, 13.9, 4.8, 6.7, 12.5, 4.9, 12.9, 10.2, 8.7, 11.8, 4.6, 10.0, 4.3, 9.1, 4.2] },
      { year: 2024, ppg: 6.0, gamesPlayed: 14, gamesMissed: 3, missedReason: "Ankle, 3 games", weekly: [10.9, 4.3, 7.5, 6.0, 4.1, 7.4, 5.9, 4.5, 5.3, 5.6, 4.3, 8.9, 5.3, 4.0] },
      { year: 2025, ppg: 4.2, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hamstring, 4 games", weekly: [1.8, 5.5, 3.0, 7.2, 2.0, 6.0, 3.5, 0.0, 8.0, 2.9, 5.3, 4.4, 5.0] },
    ],
  },
  "juju-smith-schuster-wr": {
    ppg: 4.8,
    seasons: [
      { year: 2023, ppg: 6.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.9, 10.3, 4.9, 5.7, 10.2, 3.6, 8.6, 9.0, 4.4, 5.0, 4.5, 8.1, 5.8, 6.0, 4.6, 6.6, 6.3] },
      { year: 2024, ppg: 5.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Knee, 1 game", weekly: [2.6, 1.9, 3.9, 6.4, 4.3, 4.6, 7.8, 6.3, 7.9, 5.9, 8.3, 7.5, 4.5, 6.8, 5.3, 4.0] },
      { year: 2025, ppg: 4.8, gamesPlayed: 15, gamesMissed: 2, missedReason: "Concussion, 2 games", weekly: [2.0, 6.5, 3.5, 8.0, 1.9, 5.5, 4.0, 7.2, 2.8, 6.0, 3.3, 5.8, 4.4, 6.6, 4.5] },
    ],
  },
  "keon-coleman-wr": {
    ppg: 5.0,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 6.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle, 1 game", weekly: [7.2, 7.5, 9.3, 4.2, 5.3, 4.1, 6.6, 2.6, 9.2, 7.2, 5.3, 7.0, 7.0, 6.3, 9.0, 6.2] },
      { year: 2025, ppg: 5.0, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring, 2 games", weekly: [2.0, 6.5, 3.5, 8.5, 2.0, 5.5, 4.0, 7.5, 3.0, 6.0, 3.5, 6.0, 4.5, 5.5, 7.0] },
    ],
  },
  "diontae-johnson-wr": {
    ppg: 4.6,
    seasons: [
      { year: 2023, ppg: 9.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hamstring, 1 game", weekly: [9.9, 11.3, 8.6, 6.8, 13.6, 7.4, 6.8, 10.2, 12.7, 7.6, 11.2, 11.2, 9.7, 9.2, 7.5, 8.3] },
      { year: 2024, ppg: 6.0, gamesPlayed: 15, gamesMissed: 2, missedReason: "Quad, 2 games", weekly: [10.0, 5.9, 6.3, 4.1, 4.4, 6.6, 3.6, 4.3, 8.0, 7.1, 8.4, 3.6, 6.8, 3.4, 7.5] },
      { year: 2025, ppg: 4.6, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hamstring, 4 games", weekly: [2.0, 6.5, 3.5, 7.8, 1.9, 5.5, 4.0, 6.6, 2.8, 5.9, 3.3, 4.2, 5.8] },
    ],
  },
  "robert-woods-wr": {
    ppg: 3.8,
    seasons: [
      { year: 2023, ppg: 5.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Knee, 1 game", weekly: [7.8, 6.8, 6.7, 2.5, 9.6, 4.4, 5.3, 7.6, 1.9, 3.8, 4.4, 3.2, 6.6, 5.6, 7.3, 4.5] },
      { year: 2024, ppg: 4.5, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hip, 3 games", weekly: [4.5, 6.9, 4.0, 5.1, 5.5, 3.9, 3.9, 3.9, 3.3, 4.2, 2.5, 7.7, 4.4, 3.2] },
      { year: 2025, ppg: 3.8, gamesPlayed: 12, gamesMissed: 5, missedReason: "Ankle, 5 games; reduced snaps", weekly: [1.5, 5.0, 2.8, 6.5, 1.9, 4.5, 3.3, 5.8, 2.0, 4.9, 3.5, 3.9] },
    ],
  },
  "ricky-pearsall-wr": {
    ppg: 6.0,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 5.0, gamesPlayed: 9, gamesMissed: 8, missedReason: "Offseason injury recovery, missed first half", weekly: [3.4, 5.0, 5.8, 3.6, 5.2, 6.1, 5.9, 3.8, 6.2] },
      { year: 2025, ppg: 6.0, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hamstring, 1 game", weekly: [2.5, 7.5, 4.0, 9.0, 3.0, 6.5, 5.0, 8.5, 3.5, 7.0, 4.5, 6.5, 5.5, 8.0, 6.0, 9.0] },
    ],
  },
  "sterling-shepard-wr": {
    ppg: 3.9,
    seasons: [
      { year: 2023, ppg: 6.0, gamesPlayed: 12, gamesMissed: 5, missedReason: "Achilles, 5 games", weekly: [6.1, 5.9, 6.8, 7.4, 4.6, 3.7, 4.9, 7.3, 4.7, 4.1, 8.8, 7.7] },
      { year: 2024, ppg: 4.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring, 3 games", weekly: [4.8, 3.7, 7.1, 4.8, 6.0, 5.9, 5.0, 6.8, 4.3, 4.0, 2.9, 3.1, 6.0, 2.8] },
      { year: 2025, ppg: 3.9, gamesPlayed: 13, gamesMissed: 4, missedReason: "Knee, 4 games", weekly: [1.5, 5.0, 2.8, 6.5, 1.9, 4.5, 3.3, 5.8, 2.0, 4.9, 3.5, 3.5, 5.5] },
    ],
  },
  "noah-brown-wr": {
    ppg: 4.4,
    seasons: [
      { year: 2023, ppg: 7.0, gamesPlayed: 13, gamesMissed: 4, missedReason: "Groin, 4 games", weekly: [9.7, 4.5, 5.7, 9.1, 9.9, 7.2, 5.0, 10.1, 5.5, 10.1, 5.5, 5.0, 3.7] },
      { year: 2024, ppg: 5.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle, 2 games", weekly: [4.9, 3.1, 7.0, 3.7, 5.0, 6.6, 6.9, 8.3, 4.8, 4.4, 4.2, 9.3, 4.6, 6.1, 3.6] },
      { year: 2025, ppg: 4.4, gamesPlayed: 14, gamesMissed: 3, missedReason: "Shoulder, 3 games", weekly: [2.0, 6.5, 3.3, 7.8, 1.9, 5.5, 4.0, 6.6, 2.8, 5.9, 3.3, 4.2, 5.8, 2.0] },
    ],
  },
  "allen-lazard-wr": {
    ppg: 4.2,
    seasons: [
      { year: 2023, ppg: 6.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Shoulder, 2 games", weekly: [10.7, 3.8, 2.0, 7.9, 7.7, 8.5, 5.5, 8.5, 4.0, 2.7, 7.7, 3.7, 7.8, 8.8, 8.2] },
      { year: 2024, ppg: 5.0, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle, 1 game", weekly: [3.5, 1.6, 6.4, 8.9, 4.7, 3.4, 5.2, 2.8, 7.5, 4.0, 6.9, 3.5, 3.6, 5.7, 5.1, 7.2] },
      { year: 2025, ppg: 4.2, gamesPlayed: 15, gamesMissed: 2, missedReason: "Knee, 2 games", weekly: [1.8, 5.5, 3.0, 6.8, 1.9, 5.0, 3.5, 6.0, 2.5, 5.3, 3.3, 4.8, 3.9, 5.5, 4.2] },
    ],
  },
  "hunter-renfrow-wr": {
    ppg: 3.8,
    seasons: [
      { year: 2023, ppg: 3.5, gamesPlayed: 10, gamesMissed: 7, missedReason: "Oblique/hip injuries, missed 7 games", weekly: [2.5, 4.0, 2.7, 2.5, 4.6, 2.2, 5.1, 6.9, 2.5, 2.0] },
      { year: 2024, ppg: 3.0, gamesPlayed: 8, gamesMissed: 9, missedReason: "Wrist injury, missed 9 games", weekly: [1.7, 2.9, 3.0, 2.7, 4.5, 2.8, 3.5, 2.9] },
      { year: 2025, ppg: 3.8, gamesPlayed: 12, gamesMissed: 5, missedReason: "Hamstring, 5 games", weekly: [1.5, 4.8, 2.8, 6.5, 1.9, 4.5, 3.3, 5.5, 2.0, 4.9, 3.5, 4.4] },
    ],
  },
  "calvin-austin-iii-wr": {
    ppg: 5.2,
    seasons: [
      { year: 2023, ppg: 3.0, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring, 3 games", weekly: [2.7, 1.3, 3.9, 1.9, 3.7, 2.4, 2.2, 3.8, 3.4, 3.5, 2.5, 3.8, 3.8, 3.1] },
      { year: 2024, ppg: 4.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle, 1 game", weekly: [6.1, 3.5, 5.4, 5.6, 2.2, 3.2, 7.2, 3.3, 6.6, 6.9, 5.3, 3.9, 5.4, 2.3, 3.2, 1.9] },
      { year: 2025, ppg: 5.2, gamesPlayed: 16, gamesMissed: 1, missedReason: "Concussion, 1 game", weekly: [2.0, 6.5, 3.5, 8.0, 2.5, 5.5, 4.0, 7.2, 3.0, 6.0, 3.5, 5.8, 4.4, 6.6, 5.2, 9.5] },
    ],
  },
  "marquez-valdes-scantling-wr": {
    ppg: 4.0,
    seasons: [
      { year: 2023, ppg: 6.5, gamesPlayed: 14, gamesMissed: 3, missedReason: "Knee, 3 games", weekly: [5.5, 9.3, 8.9, 11.7, 8.9, 5.0, 7.7, 6.0, 5.4, 2.6, 4.2, 3.9, 5.9, 6.0] },
      { year: 2024, ppg: 5.0, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring, 2 games", weekly: [5.2, 6.8, 3.4, 6.7, 4.5, 2.7, 4.1, 8.6, 4.5, 1.7, 6.2, 6.0, 5.3, 2.9, 6.4] },
      { year: 2025, ppg: 4.0, gamesPlayed: 13, gamesMissed: 4, missedReason: "Concussion, 4 games", weekly: [0.0, 8.5, 2.0, 9.2, 1.5, 3.3, 0.0, 10.5, 2.8, 4.0, 3.5, 3.2, 3.5] },
    ],
  },
  "dontayvion-wicks-wr": {
    ppg: 3.0,
    seasons: [
      { year: 2023, ppg: 5.0, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hamstring, 1 game", weekly: [2.2, 5.6, 4.0, 5.0, 6.2, 5.6, 4.7, 3.3, 5.1, 3.1, 3.5, 7.0, 6.7, 6.5, 5.2, 6.3] },
      { year: 2024, ppg: 3.5, gamesPlayed: 14, gamesMissed: 3, missedReason: "Quad, 3 games", weekly: [2.7, 2.6, 4.1, 4.2, 4.8, 4.3, 2.4, 3.7, 2.7, 2.6, 3.7, 5.0, 3.0, 3.2] },
      { year: 2025, ppg: 3.0, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hamstring, 4 games", weekly: [1.0, 4.5, 2.0, 5.5, 0.0, 3.5, 2.8, 4.0, 1.5, 3.9, 2.5, 4.8, 2.5] },
    ],
  },
  "jalen-tolbert-wr": {
    ppg: 2.8,
    seasons: [
      { year: 2023, ppg: 3.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle, 1 game", weekly: [2.6, 4.2, 3.5, 3.4, 4.1, 1.5, 3.0, 2.9, 2.6, 2.4, 3.8, 4.6, 4.2, 5.4, 3.6, 4.2] },
      { year: 2024, ppg: 3.0, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring, 2 games", weekly: [2.1, 3.2, 5.1, 3.5, 3.4, 1.7, 2.0, 3.4, 3.1, 4.3, 2.0, 1.9, 3.2, 2.6, 3.5] },
      { year: 2025, ppg: 2.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Knee, 3 games", weekly: [1.0, 4.0, 1.5, 5.5, 0.5, 3.5, 2.0, 4.5, 1.2, 3.8, 2.5, 4.0, 2.2, 3.0] },
    ],
  },
  "xavier-hutchinson-wr": {
    ppg: 3.2,
    seasons: [
      { year: 2023, ppg: 2.0, gamesPlayed: 10, gamesMissed: 7, missedReason: "Practice squad most of season", weekly: [2.1, 2.4, 1.2, 2.2, 1.8, 2.3, 1.4, 3.4, 1.7, 1.5] },
      { year: 2024, ppg: 2.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring, 3 games", weekly: [3.5, 2.5, 1.8, 1.6, 2.6, 3.5, 3.3, 1.1, 1.8, 3.6, 5.2, 3.1, 1.7, 3.9] },
      { year: 2025, ppg: 3.2, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle, 2 games", weekly: [1.0, 4.5, 2.0, 5.5, 0.5, 3.5, 2.8, 4.5, 1.5, 3.9, 2.5, 4.4, 2.5, 3.5, 5.4] },
    ],
  },
  "demarcus-robinson-wr": {
    ppg: 3.0,
    seasons: [
      { year: 2023, ppg: 5.0, gamesPlayed: 16, gamesMissed: 1, missedReason: "Groin, 1 game", weekly: [5.1, 1.9, 5.1, 4.9, 7.4, 5.1, 6.5, 3.6, 1.7, 7.6, 6.0, 3.9, 5.3, 3.6, 5.0, 7.3] },
      { year: 2024, ppg: 4.0, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle, 2 games", weekly: [4.0, 3.6, 5.0, 6.7, 3.3, 2.8, 3.9, 4.8, 4.6, 4.8, 3.4, 5.1, 2.0, 2.9, 3.1] },
      { year: 2025, ppg: 3.0, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring, 3 games", weekly: [1.0, 4.5, 2.0, 5.5, 0.5, 3.5, 2.8, 4.5, 1.5, 3.9, 2.5, 4.0, 2.3, 3.5] },
    ],
  },
  "kalif-raymond-wr": {
    ppg: 2.5,
    seasons: [
      { year: 2023, ppg: 3.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [2.4, 2.2, 4.8, 3.3, 4.0, 2.4, 2.3, 5.7, 1.3, 2.2, 4.8, 3.0, 2.3, 5.1, 6.4, 4.2, 3.1] },
      { year: 2024, ppg: 3.0, gamesPlayed: 16, gamesMissed: 1, missedReason: "Concussion, 1 game", weekly: [2.4, 1.5, 4.5, 3.7, 4.8, 2.1, 2.1, 2.7, 3.5, 2.9, 4.0, 2.4, 4.8, 3.1, 2.1, 1.4] },
      { year: 2025, ppg: 2.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring, 2 games", weekly: [1.0, 3.5, 1.5, 4.5, 0.5, 3.0, 2.0, 3.5, 1.2, 3.0, 2.0, 3.8, 1.5, 3.0, 3.5] },
    ],
  },
  "kavontae-turpin-wr": {
    ppg: 2.0,
    seasons: [
      { year: 2023, ppg: 2.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [1.5, 1.7, 2.3, 3.4, 2.1, 2.1, 2.6, 3.5, 3.3, 2.2, 2.3, 3.3, 2.3, 3.4, 1.6, 2.9, 2.0] },
      { year: 2024, ppg: 2.2, gamesPlayed: 16, gamesMissed: 1, missedReason: "Rib injury, 1 game", weekly: [2.6, 2.0, 2.5, 2.3, 1.3, 1.3, 2.6, 2.4, 1.8, 2.6, 2.9, 3.1, 1.0, 2.1, 2.6, 2.1] },
      { year: 2025, ppg: 2.0, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle, 2 games", weekly: [0.5, 3.0, 1.0, 4.0, 0.0, 2.5, 1.5, 3.0, 0.8, 2.5, 1.5, 3.2, 1.0, 2.5, 3.0] },
    ],
  },
  "tai-felton-wr": {
    ppg: 3.5,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 3.5, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring, 3 games", weekly: [1.0, 5.0, 2.0, 6.5, 0.5, 4.0, 3.0, 5.5, 1.5, 4.5, 2.5, 5.0, 3.0, 5.0] },
    ],
  },
  "rondale-moore-wr": {
    ppg: 2.7,
    seasons: [
      { year: 2023, ppg: 4.5, gamesPlayed: 12, gamesMissed: 5, missedReason: "Hamstring, 5 games", weekly: [4.4, 4.5, 5.9, 3.0, 3.0, 6.3, 2.7, 5.0, 2.6, 4.0, 4.3, 8.3] },
      { year: 2024, ppg: 3.5, gamesPlayed: 10, gamesMissed: 7, missedReason: "Concussion/knee, missed 7 games", weekly: [4.3, 2.9, 2.0, 4.6, 2.8, 4.3, 2.7, 4.1, 4.2, 3.1] },
      { year: 2025, ppg: 2.7, gamesPlayed: 11, gamesMissed: 6, missedReason: "Hamstring, 6 games", weekly: [1.0, 4.0, 1.5, 5.5, 0.5, 3.0, 2.0, 4.5, 1.2, 3.6, 3.0] },
    ],
  },
  "john-metchie-iii-wr": {
    ppg: 2.8,
    seasons: [
      { year: 2023, ppg: 3.0, gamesPlayed: 13, gamesMissed: 4, missedReason: "Illness recovery, missed 4 games", weekly: [3.4, 4.0, 2.9, 2.0, 3.6, 4.3, 1.8, 2.6, 2.9, 4.1, 2.5, 2.3, 2.6] },
      { year: 2024, ppg: 2.5, gamesPlayed: 12, gamesMissed: 5, missedReason: "Hamstring, 5 games", weekly: [2.5, 2.5, 1.6, 1.4, 1.4, 2.0, 4.1, 1.9, 2.7, 3.6, 3.1, 3.2] },
      { year: 2025, ppg: 2.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Ankle, 3 games", weekly: [1.0, 4.0, 1.5, 5.5, 0.5, 3.5, 2.0, 4.5, 1.2, 3.8, 2.5, 4.0, 2.2, 3.0] },
    ],
  },
  "ainias-smith-wr": {
    ppg: 2.6,
    seasons: [
      { year: 2023, ppg: 1.5, gamesPlayed: 8, gamesMissed: 9, missedReason: "Practice squad most of season", weekly: [1.4, 1.1, 2.0, 1.7, 0.5, 0.7, 2.6, 2.0] },
      { year: 2024, ppg: 2.2, gamesPlayed: 12, gamesMissed: 5, missedReason: "Hamstring, 5 games", weekly: [2.8, 2.0, 1.7, 2.1, 2.7, 1.2, 1.4, 2.5, 2.4, 2.1, 2.7, 2.8] },
      { year: 2025, ppg: 2.6, gamesPlayed: 13, gamesMissed: 4, missedReason: "Knee, 4 games", weekly: [0.5, 3.5, 1.0, 4.5, 0.5, 2.5, 1.5, 3.5, 0.8, 3.0, 2.0, 4.0, 6.0] },
    ],
  },
  "malik-washington-wr": {
    ppg: 3.4,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 3.0, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring, 2 games", weekly: [4.8, 3.2, 5.9, 2.9, 1.8, 3.9, 3.2, 2.8, 1.4, 4.1, 2.7, 3.0, 1.3, 1.6, 2.4] },
      { year: 2025, ppg: 3.4, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle, 1 game", weekly: [1.0, 4.5, 2.0, 5.5, 0.5, 3.5, 2.8, 4.5, 1.5, 3.9, 2.5, 4.4, 2.5, 3.5, 5.4, 5.9] },
    ],
  },
  "devaughn-vele-wr": {
    ppg: 3.5,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 4.0, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle, 1 game", weekly: [5.1, 3.1, 4.3, 5.2, 2.9, 5.5, 4.9, 4.8, 3.8, 2.5, 2.3, 2.7, 5.8, 4.4, 4.1, 2.6] },
      { year: 2025, ppg: 3.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring, 2 games", weekly: [1.5, 4.5, 2.0, 6.0, 0.5, 3.5, 2.8, 5.0, 1.5, 4.0, 2.5, 4.5, 3.0, 4.5, 6.7] },
    ],
  },
  "dyami-brown-wr": {
    ppg: 3.3,
    seasons: [
      { year: 2023, ppg: 2.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring, 2 games", weekly: [1.8, 1.5, 2.1, 2.8, 0.9, 3.6, 2.7, 3.1, 3.8, 3.1, 3.4, 2.1, 2.4, 2.0, 2.2] },
      { year: 2024, ppg: 3.0, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle, 1 game", weekly: [3.3, 2.0, 2.5, 3.1, 2.9, 3.0, 3.8, 3.4, 3.0, 1.7, 3.5, 2.9, 4.4, 3.5, 1.2, 3.8] },
      { year: 2025, ppg: 3.3, gamesPlayed: 15, gamesMissed: 2, missedReason: "Knee, 2 games", weekly: [1.0, 4.5, 2.0, 5.5, 0.5, 3.5, 2.8, 4.5, 1.5, 3.9, 2.5, 4.4, 2.5, 5.0, 5.4] },
    ],
  },
  "isaac-teslaa-wr": {
    ppg: 2.7,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 2.7, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hamstring, 4 games", weekly: [1.0, 3.5, 1.5, 4.5, 0.5, 3.0, 2.0, 4.0, 1.2, 3.6, 2.5, 4.1, 4.0] },
    ],
  },
  "savion-williams-wr": {
    ppg: 3.0,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 3.0, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring, 3 games", weekly: [1.0, 4.0, 1.5, 5.5, 0.5, 3.5, 2.0, 4.5, 1.2, 3.8, 2.5, 4.0, 2.5, 5.5] },
    ],
  },
  "brock-bowers-te": {
    ppg: 16.2,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 14.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.9, 14.3, 13.1, 9.1, 21.2, 15.1, 21.5, 19.6, 14.3, 18.9, 17.7, 12.1, 25.0, 9.9, 13.4, 9.3, 12.2] },
      { year: 2025, ppg: 16.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [14.0, 22.5, 9.8, 18.2, 25.1, 11.4, 16.7, 19.9, 8.5, 20.3, 15.2, 24.6, 10.1, 17.8, 13.9, 21.5, 12.9] },
    ],
  },
  "trey-mcbride-te": {
    ppg: 15.8,
    seasons: [
      { year: 2023, ppg: 8.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.8, 3.7, 4.6, 15.5, 4.8, 6.5, 9.0, 10.1, 10.0, 15.3, 10.9, 10.5, 7.5, 4.3, 9.2, 5.5, 10.3] },
      { year: 2024, ppg: 13.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, Week 9", weekly: [16.3, 8.0, 14.9, 12.1, 17.3, 17.9, 16.5, 15.7, 20.2, 9.8, 10.9, 25.0, 5.0, 7.5, 17.4, 7.9] },
      { year: 2025, ppg: 15.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [12.5, 19.8, 8.9, 16.4, 22.1, 10.2, 17.9, 14.5, 25.3, 9.6, 18.7, 13.2, 20.9, 11.8, 16.1, 23.4, 10.5] },
    ],
  },
  "colston-loveland-te": {
    ppg: 11.5,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 11.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, Weeks 6-7", weekly: [8.5, 14.2, 6.9, 12.8, 18.5, 7.4, 15.9, 10.2, 13.6, 9.1, 16.8, 5.5, 12.4, 17.2, 11.0] },
    ],
  },
  "tyler-warren-te": {
    ppg: 12.8,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 12.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.5, 15.8, 7.2, 14.6, 19.3, 8.9, 16.2, 11.5, 20.1, 6.8, 13.9, 17.4, 10.2, 15.5, 9.8, 18.6, 12.1] },
    ],
  },
  "tucker-kraft-te": {
    ppg: 13.6,
    seasons: [
      { year: 2023, ppg: 6.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.6, 5.0, 4.0, 4.8, 8.0, 7.6, 9.0, 3.9, 4.1, 3.8, 10.7, 9.4, 3.3, 9.0, 4.3, 5.6, 7.3] },
      { year: 2024, ppg: 10.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Knee soreness, Week 14", weekly: [12.2, 12.2, 13.4, 15.7, 14.5, 8.9, 10.7, 13.1, 3.9, 12.9, 11.7, 8.4, 6.3, 8.7, 6.4, 9.0] },
      { year: 2025, ppg: 13.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [10.2, 16.5, 8.9, 14.7, 19.8, 9.4, 17.1, 12.6, 21.3, 7.5, 15.2, 18.9, 11.0, 14.4, 10.8, 19.2, 13.5] },
    ],
  },
  "harold-fannin-jr-te": {
    ppg: 9.8,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 9.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, Week 10", weekly: [6.5, 12.8, 5.4, 10.9, 15.6, 7.2, 13.1, 8.9, 4.6, 11.5, 16.2, 6.8, 9.4, 12.6, 7.9, 10.1] },
    ],
  },
  "sam-laporta-te": {
    ppg: 10.5,
    seasons: [
      { year: 2023, ppg: 12.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [11.9, 14.8, 15.2, 8.2, 8.9, 6.5, 8.7, 7.0, 8.0, 14.1, 21.0, 9.8, 15.2, 15.0, 15.0, 10.7, 15.7] },
      { year: 2024, ppg: 9.8, gamesPlayed: 15, gamesMissed: 2, missedReason: "Back spasms, Weeks 11-12", weekly: [8.4, 14.5, 12.1, 6.3, 15.9, 4.6, 7.1, 14.2, 8.1, 9.4, 8.9, 6.1, 4.3, 10.6, 16.5] },
      { year: 2025, ppg: 10.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.8, 13.2, 6.5, 11.9, 16.4, 8.1, 12.6, 9.4, 5.8, 14.5, 10.2, 17.1, 7.3, 11.6, 9.9, 13.8, 8.4] },
    ],
  },
  "kyle-pitts-sr-te": {
    ppg: 10.8,
    seasons: [
      { year: 2023, ppg: 8.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.6, 10.1, 5.9, 12.2, 8.1, 9.0, 9.3, 12.4, 12.3, 7.6, 5.7, 7.6, 8.9, 5.5, 11.2, 7.7, 12.2] },
      { year: 2024, ppg: 9.4, gamesPlayed: 16, gamesMissed: 1, missedReason: "Knee sprain, Week 8", weekly: [11.6, 5.7, 11.0, 7.1, 5.5, 9.0, 5.8, 11.8, 15.2, 6.8, 5.3, 8.7, 11.1, 8.8, 15.7, 11.3] },
      { year: 2025, ppg: 10.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.2, 13.5, 6.9, 12.4, 17.1, 7.6, 14.2, 9.8, 6.1, 15.6, 10.9, 18.3, 7.4, 12.1, 9.5, 14.8, 8.9] },
    ],
  },
  "travis-kelce-te": {
    ppg: 9.5,
    seasons: [
      { year: 2023, ppg: 13.2, gamesPlayed: 15, gamesMissed: 2, missedReason: "Knee/ankle, Weeks 4-5", weekly: [7.5, 15.7, 9.5, 17.5, 8.1, 20.3, 17.8, 19.2, 10.1, 9.0, 11.5, 10.0, 15.9, 12.2, 13.7] },
      { year: 2024, ppg: 10.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle injury, Week 12", weekly: [7.2, 7.5, 11.1, 3.0, 11.4, 13.0, 14.1, 9.8, 10.4, 9.3, 8.4, 12.7, 11.2, 18.3, 9.8, 15.6] },
      { year: 2025, ppg: 9.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Rest/knee maintenance, Weeks 15-16", weekly: [7.2, 12.5, 6.8, 10.9, 4.5, 13.8, 8.1, 15.2, 6.4, 9.9, 11.6, 5.8, 14.1, 7.9, 10.3] },
    ],
  },
  "george-kittle-te": {
    ppg: 11.2,
    seasons: [
      { year: 2023, ppg: 12.5, gamesPlayed: 12, gamesMissed: 5, missedReason: "Groin strain, Weeks 6-10", weekly: [16.3, 16.9, 8.0, 12.0, 9.8, 7.4, 11.3, 15.4, 9.0, 13.7, 13.9, 16.3] },
      { year: 2024, ppg: 13.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hamstring tweak, Week 9", weekly: [19.0, 17.5, 15.6, 25.5, 17.5, 12.4, 16.9, 10.5, 10.8, 9.2, 10.7, 4.7, 8.0, 17.2, 12.6, 12.7] },
      { year: 2025, ppg: 11.2, gamesPlayed: 14, gamesMissed: 3, missedReason: "Calf strain, Weeks 3-5", weekly: [8.5, 14.2, 6.9, 12.8, 17.5, 9.1, 13.4, 7.6, 15.9, 10.2, 6.3, 16.8, 11.5, 9.8] },
    ],
  },
  "dalton-kincaid-te": {
    ppg: 10.9,
    seasons: [
      { year: 2023, ppg: 7.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Concussion protocol, Week 13", weekly: [9.2, 6.8, 8.3, 12.8, 3.7, 7.4, 7.7, 5.7, 4.3, 8.2, 9.3, 2.0, 11.7, 8.5, 9.4, 5.0] },
      { year: 2024, ppg: 9.0, gamesPlayed: 14, gamesMissed: 3, missedReason: "Knee injury, Weeks 9-11", weekly: [10.3, 7.2, 7.1, 6.3, 11.5, 8.8, 10.5, 9.3, 8.8, 13.2, 5.2, 12.7, 9.0, 6.1] },
      { year: 2025, ppg: 10.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.1, 13.6, 6.4, 11.9, 16.8, 7.9, 14.3, 9.5, 5.9, 15.4, 10.6, 17.8, 7.2, 12.4, 9.1, 14.9, 8.6] },
    ],
  },
  "jake-ferguson-te": {
    ppg: 8.8,
    seasons: [
      { year: 2023, ppg: 9.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.0, 8.8, 5.8, 10.7, 8.4, 9.0, 9.7, 10.3, 6.9, 9.8, 12.2, 12.3, 5.4, 10.0, 8.7, 11.5, 11.9] },
      { year: 2024, ppg: 8.1, gamesPlayed: 15, gamesMissed: 2, missedReason: "Concussion protocol, Weeks 6-7", weekly: [5.1, 10.2, 7.6, 7.4, 10.0, 8.2, 7.9, 11.6, 7.8, 10.0, 6.8, 7.9, 6.7, 4.4, 9.9] },
      { year: 2025, ppg: 8.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.5, 11.2, 5.4, 9.8, 14.1, 6.9, 10.5, 7.8, 4.6, 12.6, 8.9, 15.3, 5.9, 9.4, 7.1, 11.8, 6.3] },
    ],
  },
  "dallas-goedert-te": {
    ppg: 8.4,
    seasons: [
      { year: 2023, ppg: 10.5, gamesPlayed: 13, gamesMissed: 4, missedReason: "Forearm fracture, Weeks 7-10", weekly: [13.6, 12.8, 11.3, 11.5, 12.9, 11.8, 13.7, 3.9, 4.1, 12.2, 6.1, 5.1, 17.5] },
      { year: 2024, ppg: 9.1, gamesPlayed: 15, gamesMissed: 2, missedReason: "Knee sprain, Weeks 13-14", weekly: [3.8, 5.1, 10.1, 9.4, 15.6, 9.9, 10.2, 12.3, 10.8, 6.9, 10.7, 8.7, 9.5, 8.7, 4.8] },
      { year: 2025, ppg: 8.4, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hip soreness, Week 5", weekly: [6.2, 10.5, 5.1, 8.9, 12.6, 6.8, 9.4, 7.2, 4.5, 11.3, 8.1, 13.5, 5.6, 8.8, 6.9, 10.2] },
    ],
  },
  "isaiah-likely-te": {
    ppg: 9.5,
    seasons: [
      { year: 2023, ppg: 7.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, Week 15", weekly: [5.5, 8.5, 4.4, 5.9, 8.6, 4.1, 9.6, 9.2, 12.6, 10.8, 4.9, 10.9, 5.2, 9.8, 9.0, 5.8] },
      { year: 2024, ppg: 8.6, gamesPlayed: 13, gamesMissed: 4, missedReason: "Foot fracture, Weeks 9-12", weekly: [5.5, 11.9, 8.0, 8.4, 3.8, 11.2, 5.2, 12.2, 7.6, 9.8, 5.6, 12.3, 10.3] },
      { year: 2025, ppg: 9.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.1, 12.4, 5.9, 10.6, 15.2, 7.5, 11.8, 8.4, 5.2, 13.6, 9.7, 16.5, 6.4, 10.1, 7.8, 12.9, 6.6] },
    ],
  },
  "mark-andrews-te": {
    ppg: 8.2,
    seasons: [
      { year: 2023, ppg: 11.8, gamesPlayed: 10, gamesMissed: 7, missedReason: "Ankle fracture/dislocation, Weeks 12-17", weekly: [9.9, 9.6, 5.3, 10.9, 14.8, 15.8, 12.5, 11.0, 21.0, 7.2] },
      { year: 2024, ppg: 10.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Illness, Week 4", weekly: [14.6, 8.6, 16.4, 12.7, 8.3, 6.9, 7.8, 7.7, 3.8, 11.1, 23.2, 17.1, 12.3, 16.3, 3.8, 3.8] },
      { year: 2025, ppg: 8.2, gamesPlayed: 15, gamesMissed: 2, missedReason: "Knee soreness, Weeks 8-9", weekly: [6.1, 10.4, 5.5, 8.9, 13.2, 6.5, 9.8, 7.1, 4.8, 11.5, 8.3, 12.9, 5.9, 7.6, 9.2] },
    ],
  },
  "t-j-hockenson-te": {
    ppg: 8.9,
    seasons: [
      { year: 2023, ppg: 12.9, gamesPlayed: 15, gamesMissed: 2, missedReason: "ACL/MCL injury, Weeks 16-17", weekly: [9.6, 17.9, 6.1, 14.2, 16.7, 11.2, 13.2, 15.0, 16.7, 11.6, 8.8, 11.9, 12.5, 15.4, 12.7] },
      { year: 2024, ppg: 5.5, gamesPlayed: 6, gamesMissed: 11, missedReason: "ACL recovery, missed Weeks 1-11", weekly: [6.3, 7.1, 4.3, 5.1, 4.2, 6.0] },
      { year: 2025, ppg: 8.9, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, Weeks 10-11", weekly: [6.5, 11.2, 5.8, 9.6, 14.1, 6.9, 10.4, 7.5, 4.9, 12.6, 8.8, 13.4, 6.2, 9.1, 7.7] },
    ],
  },
  "hunter-henry-te": {
    ppg: 7.6,
    seasons: [
      { year: 2023, ppg: 7.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.0, 5.3, 5.0, 11.2, 5.7, 5.6, 5.3, 11.0, 7.8, 6.1, 11.1, 9.5, 8.5, 8.3, 10.8, 9.8, 7.3] },
      { year: 2024, ppg: 8.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.9, 7.6, 6.1, 13.0, 9.2, 10.0, 6.4, 5.1, 9.2, 10.9, 7.8, 9.1, 8.3, 8.3, 9.4, 7.7, 10.5] },
      { year: 2025, ppg: 7.6, gamesPlayed: 16, gamesMissed: 1, missedReason: "Rest, Week 17", weekly: [5.6, 9.4, 4.8, 8.1, 11.5, 6.2, 8.9, 6.5, 4.1, 10.2, 7.4, 12.1, 5.3, 8.0, 6.7, 9.5] },
    ],
  },
  "evan-engram-te": {
    ppg: 7.8,
    seasons: [
      { year: 2023, ppg: 10.2, gamesPlayed: 16, gamesMissed: 1, missedReason: "Knee soreness, Week 6", weekly: [15.1, 14.8, 7.7, 12.6, 6.7, 12.8, 8.9, 6.5, 12.3, 12.8, 11.3, 7.0, 6.5, 9.0, 8.2, 11.0] },
      { year: 2024, ppg: 7.4, gamesPlayed: 13, gamesMissed: 4, missedReason: "Foot injury, Weeks 10-13", weekly: [4.5, 7.1, 11.5, 10.9, 3.7, 9.1, 5.2, 6.1, 8.3, 7.7, 5.4, 9.0, 7.7] },
      { year: 2025, ppg: 7.8, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, Weeks 4-5", weekly: [5.8, 9.6, 4.9, 8.4, 11.9, 6.3, 9.1, 6.8, 4.4, 10.5, 7.6, 12.4, 5.5, 8.2, 7.0] },
    ],
  },
  "dalton-schultz-te": {
    ppg: 7.2,
    seasons: [
      { year: 2023, ppg: 8.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [11.0, 7.4, 6.9, 6.8, 14.5, 5.2, 15.8, 7.1, 5.7, 9.9, 10.0, 10.3, 8.6, 6.6, 9.5, 5.5, 5.4] },
      { year: 2024, ppg: 8.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, Week 11", weekly: [13.8, 7.8, 10.2, 10.5, 3.2, 6.2, 14.1, 5.9, 12.6, 5.1, 8.8, 5.3, 9.5, 12.6, 10.3, 6.5] },
      { year: 2025, ppg: 7.2, gamesPlayed: 15, gamesMissed: 2, missedReason: "Knee soreness, Weeks 7-8", weekly: [5.4, 8.9, 4.6, 7.8, 11.1, 5.9, 8.4, 6.2, 4.0, 9.8, 7.1, 11.5, 5.1, 7.6, 6.4] },
    ],
  },
  "cade-otton-te": {
    ppg: 7.7,
    seasons: [
      { year: 2023, ppg: 6.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.4, 6.2, 4.8, 4.4, 13.0, 7.3, 10.3, 4.6, 3.9, 8.7, 8.0, 4.1, 4.3, 7.7, 10.2, 7.6, 5.8] },
      { year: 2024, ppg: 8.3, gamesPlayed: 16, gamesMissed: 1, missedReason: "Concussion protocol, Week 5", weekly: [6.0, 10.9, 7.9, 9.8, 6.8, 11.5, 7.2, 12.3, 5.9, 6.4, 5.6, 13.6, 9.3, 2.8, 8.4, 8.4] },
      { year: 2025, ppg: 7.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.8, 9.6, 4.9, 8.4, 12.1, 6.3, 9.2, 6.9, 4.4, 10.6, 7.7, 12.6, 5.5, 8.3, 7.0, 9.9, 6.1] },
    ],
  },
  "pat-freiermuth-te": {
    ppg: 6.3,
    seasons: [
      { year: 2023, ppg: 7.1, gamesPlayed: 12, gamesMissed: 5, missedReason: "Shoulder injury, Weeks 5-9", weekly: [2.4, 6.0, 6.6, 9.5, 8.2, 8.8, 5.3, 7.9, 9.6, 7.4, 7.1, 6.4] },
      { year: 2024, ppg: 6.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Hamstring strain, Week 14", weekly: [9.2, 6.2, 2.2, 3.4, 8.6, 4.8, 12.8, 3.9, 9.1, 5.2, 5.4, 7.2, 11.2, 8.0, 3.4, 8.2] },
      { year: 2025, ppg: 6.3, gamesPlayed: 15, gamesMissed: 2, missedReason: "Concussion protocol, Weeks 9-10", weekly: [4.8, 7.9, 4.1, 6.8, 9.6, 5.2, 7.4, 5.6, 3.5, 8.6, 6.2, 10.1, 4.5, 6.6, 5.5] },
    ],
  },
  "david-njoku-te": {
    ppg: 5.9,
    seasons: [
      { year: 2023, ppg: 8.9, gamesPlayed: 14, gamesMissed: 3, missedReason: "Facial fracture, Weeks 3-5", weekly: [6.2, 4.9, 10.3, 9.8, 10.5, 10.2, 10.9, 9.4, 10.0, 7.4, 9.1, 8.4, 10.9, 6.6] },
      { year: 2024, ppg: 7.5, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, Weeks 12-13", weekly: [4.4, 12.5, 6.8, 8.9, 8.0, 5.0, 5.9, 9.7, 7.5, 4.2, 5.5, 8.4, 8.6, 6.7, 10.4] },
      { year: 2025, ppg: 5.9, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, Weeks 6-8", weekly: [4.4, 7.2, 3.8, 6.5, 9.1, 4.9, 6.8, 5.1, 3.2, 7.9, 5.6, 9.5, 4.2, 6.0] },
    ],
  },
  "mike-gesicki-te": {
    ppg: 5.4,
    seasons: [
      { year: 2023, ppg: 5.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Knee soreness, Week 10", weekly: [6.2, 7.9, 6.0, 7.7, 5.7, 5.0, 8.1, 4.3, 4.8, 6.0, 5.2, 8.7, 2.3, 3.2, 8.3, 3.4] },
      { year: 2024, ppg: 6.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.0, 9.4, 5.3, 7.9, 9.4, 7.1, 7.1, 9.0, 4.8, 7.3, 5.8, 4.2, 6.9, 3.9, 9.2, 6.0, 5.0] },
      { year: 2025, ppg: 5.4, gamesPlayed: 15, gamesMissed: 2, missedReason: "Back spasms, Weeks 13-14", weekly: [4.1, 6.8, 3.5, 6.0, 8.5, 4.4, 6.3, 4.8, 2.9, 7.3, 5.2, 8.9, 3.9, 5.5, 5.1] },
    ],
  },
  "tyler-higbee-te": {
    ppg: 5.6,
    seasons: [
      { year: 2023, ppg: 7.2, gamesPlayed: 12, gamesMissed: 5, missedReason: "ACL/MCL injury, Weeks 13-17", weekly: [12.6, 9.5, 4.5, 6.6, 9.2, 7.8, 7.0, 4.4, 4.3, 7.0, 9.1, 4.4] },
      { year: 2024, ppg: 4.5, gamesPlayed: 8, gamesMissed: 9, missedReason: "ACL recovery, missed Weeks 1-9", weekly: [4.3, 6.2, 3.3, 2.5, 8.1, 3.1, 4.1, 4.4] },
      { year: 2025, ppg: 5.6, gamesPlayed: 13, gamesMissed: 4, missedReason: "Knee soreness, Weeks 11-14", weekly: [4.2, 7.0, 3.6, 6.1, 8.8, 4.5, 6.5, 4.9, 3.0, 7.5, 5.3, 9.1, 4.0] },
    ],
  },
  "brenton-strange-te": {
    ppg: 6.5,
    seasons: [
      { year: 2023, ppg: 3.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, Week 12", weekly: [4.3, 5.9, 2.0, 3.3, 5.6, 3.1, 4.9, 3.8, 3.2, 5.4, 3.9, 3.4, 1.8, 5.8, 2.6, 3.4] },
      { year: 2024, ppg: 5.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.0, 3.8, 8.3, 6.9, 6.7, 6.7, 4.5, 3.8, 5.1, 4.0, 7.1, 7.1, 4.1, 5.0, 8.4, 8.4, 3.7] },
      { year: 2025, ppg: 6.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Concussion protocol, Week 8", weekly: [4.9, 8.1, 4.2, 7.0, 10.0, 5.4, 7.5, 5.7, 3.6, 8.7, 6.3, 10.4, 4.6, 6.8, 5.9, 8.3] },
    ],
  },
  "mason-taylor-te": {
    ppg: 6.1,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 6.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.6, 7.6, 3.9, 6.6, 9.4, 5.1, 7.1, 5.4, 3.4, 8.2, 5.9, 9.8, 4.3, 6.4, 5.5, 7.8, 4.9] },
    ],
  },
  "chig-okonkwo-te": {
    ppg: 6.8,
    seasons: [
      { year: 2023, ppg: 6.4, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, Weeks 8-9", weekly: [8.2, 6.9, 6.8, 3.3, 5.7, 5.9, 7.6, 2.5, 7.5, 7.8, 9.0, 3.4, 7.8, 6.9, 6.7] },
      { year: 2024, ppg: 5.9, gamesPlayed: 14, gamesMissed: 3, missedReason: "Knee sprain, Weeks 14-16", weekly: [10.8, 4.0, 4.8, 4.0, 7.3, 3.7, 7.4, 4.5, 7.2, 8.2, 5.9, 4.9, 5.2, 4.7] },
      { year: 2025, ppg: 6.8, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, Week 6", weekly: [5.1, 8.5, 4.4, 7.3, 10.4, 5.6, 7.9, 6.0, 3.8, 9.1, 6.6, 10.8, 4.8, 7.1, 6.2, 8.6] },
    ],
  },
  "tommy-tremble-te": {
    ppg: 3.8,
    seasons: [
      { year: 2023, ppg: 3.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Concussion protocol, Week 9", weekly: [4.2, 3.8, 3.2, 6.6, 4.8, 2.3, 2.6, 2.1, 4.8, 4.6, 3.6, 6.4, 1.6, 1.6, 2.3, 1.5] },
      { year: 2024, ppg: 4.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [1.2, 5.2, 2.3, 3.9, 4.3, 3.1, 4.3, 3.6, 5.6, 4.9, 5.2, 5.3, 4.8, 2.7, 7.5, 3.6, 3.9] },
      { year: 2025, ppg: 3.8, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, Weeks 12-13", weekly: [2.9, 4.8, 2.4, 4.1, 5.9, 3.1, 4.4, 3.3, 2.0, 5.2, 3.7, 6.1, 2.7, 3.9, 3.4] },
    ],
  },
  "greg-dulcich-te": {
    ppg: 4.5,
    seasons: [
      { year: 2023, ppg: 4.9, gamesPlayed: 10, gamesMissed: 7, missedReason: "Hamstring strain, Weeks 5-11", weekly: [5.2, 3.4, 5.0, 6.3, 5.5, 4.6, 2.5, 8.1, 2.9, 5.5] },
      { year: 2024, ppg: 3.2, gamesPlayed: 9, gamesMissed: 8, missedReason: "Hamstring/groin, Weeks 2-9", weekly: [2.1, 2.5, 2.9, 4.2, 4.6, 2.3, 3.9, 3.7, 2.6] },
      { year: 2025, ppg: 4.5, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hamstring strain, Weeks 10-13", weekly: [3.4, 5.6, 2.8, 4.8, 6.9, 3.6, 5.1, 3.9, 2.3, 6.1, 4.3, 7.0, 3.1] },
    ],
  },
  "gunnar-helm-te": {
    ppg: 4.9,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 4.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, Week 11", weekly: [3.7, 6.1, 3.0, 5.2, 7.4, 3.9, 5.5, 4.2, 2.5, 6.6, 4.6, 7.6, 3.4, 5.0, 4.3, 6.0] },
    ],
  },
  "aj-barner-te": {
    ppg: 4.6,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 3.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.0, 3.9, 1.9, 4.3, 4.5, 3.1, 2.5, 4.2, 3.7, 4.4, 4.4, 2.4, 2.9, 4.1, 2.2, 3.0, 2.3] },
      { year: 2025, ppg: 4.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [3.5, 5.8, 2.9, 4.9, 7.0, 3.7, 5.2, 4.0, 2.4, 6.2, 4.4, 7.2, 3.2, 4.7, 4.1, 5.6, 3.9] },
    ],
  },
  "juwan-johnson-te": {
    ppg: 4.1,
    seasons: [
      { year: 2023, ppg: 5.9, gamesPlayed: 15, gamesMissed: 2, missedReason: "Knee sprain, Weeks 9-10", weekly: [5.2, 7.2, 4.1, 2.9, 6.2, 8.2, 5.9, 5.9, 8.8, 9.3, 4.5, 4.4, 5.2, 6.1, 4.6] },
      { year: 2024, ppg: 4.8, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, Weeks 6-8", weekly: [6.5, 6.0, 2.9, 4.4, 5.2, 3.9, 4.9, 4.8, 3.3, 5.0, 8.0, 5.0, 4.0, 3.3] },
      { year: 2025, ppg: 4.1, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, Weeks 13-14", weekly: [3.1, 5.1, 2.6, 4.4, 6.3, 3.3, 4.7, 3.6, 2.1, 5.5, 3.9, 6.4, 2.8, 4.2, 3.5] },
    ],
  },
  "michael-mayer-te": {
    ppg: 4.3,
    seasons: [
      { year: 2023, ppg: 4.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [3.9, 4.0, 5.6, 3.4, 2.4, 3.4, 6.0, 2.6, 2.7, 5.1, 3.6, 5.7, 6.1, 5.7, 3.6, 6.1, 4.9] },
      { year: 2024, ppg: 4.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Concussion protocol, Week 7", weekly: [5.8, 3.7, 4.3, 5.3, 4.2, 3.3, 4.7, 5.0, 5.5, 2.4, 4.3, 7.2, 5.5, 6.3, 6.4, 4.5] },
      { year: 2025, ppg: 4.3, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, Weeks 10-11", weekly: [3.2, 5.4, 2.7, 4.6, 6.6, 3.5, 4.9, 3.8, 2.2, 5.8, 4.1, 6.7, 2.9, 4.4, 3.7] },
    ],
  },
  "cole-kmet-te": {
    ppg: 4.0,
    seasons: [
      { year: 2023, ppg: 6.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [3.8, 8.1, 5.3, 8.1, 7.9, 3.0, 9.2, 4.5, 2.6, 7.1, 8.1, 8.3, 12.2, 5.9, 4.3, 8.1, 4.0] },
      { year: 2024, ppg: 5.3, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, Weeks 5-6", weekly: [6.0, 3.7, 6.9, 3.2, 6.5, 7.1, 3.6, 5.3, 5.8, 7.2, 7.5, 3.0, 4.9, 6.9, 1.9] },
      { year: 2025, ppg: 4.0, gamesPlayed: 14, gamesMissed: 3, missedReason: "Back spasms, Weeks 11-13", weekly: [3.0, 5.0, 2.5, 4.3, 6.1, 3.3, 4.6, 3.5, 2.0, 5.4, 3.8, 6.3, 2.7, 4.1] },
    ],
  },
  "noah-gray-te": {
    ppg: 2.6,
    seasons: [
      { year: 2023, ppg: 3.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.6, 2.4, 4.9, 2.6, 2.9, 2.9, 5.3, 3.8, 4.4, 2.8, 2.7, 4.0, 5.2, 2.8, 3.6, 4.2, 4.5] },
      { year: 2024, ppg: 3.1, gamesPlayed: 16, gamesMissed: 1, missedReason: "Knee soreness, Week 15", weekly: [3.9, 2.8, 2.6, 2.7, 3.3, 2.4, 3.3, 3.7, 5.4, 2.5, 2.4, 3.5, 4.9, 3.0, 1.8, 1.4] },
      { year: 2025, ppg: 2.6, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, Weeks 9-10", weekly: [2.0, 3.3, 1.6, 2.8, 4.1, 2.1, 3.0, 2.3, 1.3, 3.6, 2.5, 4.2, 1.8, 2.7, 2.2] },
    ],
  },
  "terrance-ferguson-te": {
    ppg: 2.9,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 2.9, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, Weeks 7-8", weekly: [2.2, 3.7, 1.8, 3.1, 4.5, 2.3, 3.3, 2.5, 1.5, 4.0, 2.8, 4.6, 2.0, 3.0, 2.4] },
    ],
  },
  "elijah-arroyo-te": {
    ppg: 2.4,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 2.4, gamesPlayed: 13, gamesMissed: 4, missedReason: "Shoulder injury, Weeks 5-8", weekly: [1.8, 3.0, 1.5, 2.6, 3.7, 1.9, 2.7, 2.1, 1.2, 3.3, 2.3, 3.8, 1.6] },
    ],
  },
  "darnell-washington-te": {
    ppg: 3.6,
    seasons: [
      { year: 2023, ppg: 2.1, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, Weeks 11-12", weekly: [2.3, 2.1, 2.4, 2.9, 2.2, 1.5, 2.0, 1.5, 1.2, 2.0, 2.0, 2.3, 1.6, 2.8, 2.7] },
      { year: 2024, ppg: 3.3, gamesPlayed: 16, gamesMissed: 1, missedReason: "Knee soreness, Week 8", weekly: [3.6, 2.5, 4.4, 2.9, 2.5, 3.1, 3.7, 2.7, 2.9, 3.2, 3.0, 4.0, 3.6, 4.0, 4.3, 2.4] },
      { year: 2025, ppg: 3.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [2.7, 4.5, 2.3, 3.9, 5.5, 2.9, 4.1, 3.1, 1.9, 4.8, 3.4, 5.6, 2.5, 3.7, 3.2, 4.4, 3.0] },
    ],
  },
  "charlie-kolar-te": {
    ppg: 2.9,
    seasons: [
      { year: 2023, ppg: 1.8, gamesPlayed: 11, gamesMissed: 6, missedReason: "Foot injury, Weeks 8-13", weekly: [2.7, 1.3, 2.9, 2.3, 0.9, 1.4, 1.6, 2.6, 1.2, 1.5, 1.4] },
      { year: 2024, ppg: 2.5, gamesPlayed: 14, gamesMissed: 3, missedReason: "Knee sprain, Weeks 14-16", weekly: [3.5, 1.2, 2.8, 2.7, 2.4, 2.9, 1.8, 2.6, 1.9, 2.0, 2.9, 1.9, 3.2, 3.2] },
      { year: 2025, ppg: 2.9, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, Weeks 5-6", weekly: [2.2, 3.6, 1.8, 3.1, 4.4, 2.3, 3.2, 2.5, 1.5, 3.9, 2.7, 4.5, 2.0, 3.0, 2.4] },
    ],
  },
  "theo-johnson-te": {
    ppg: 3.4,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 3.0, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hamstring strain, Weeks 12-13", weekly: [4.3, 2.1, 4.1, 2.6, 2.9, 2.0, 2.4, 2.3, 6.2, 1.7, 1.4, 2.9, 2.4, 4.0, 3.7] },
      { year: 2025, ppg: 3.4, gamesPlayed: 16, gamesMissed: 1, missedReason: "Concussion protocol, Week 9", weekly: [2.6, 4.3, 2.1, 3.7, 5.2, 2.7, 3.8, 2.9, 1.7, 4.6, 3.2, 5.3, 2.4, 3.5, 2.8, 4.1] },
    ],
  },
  "luke-musgrave-te": {
    ppg: 2.8,
    seasons: [
      { year: 2023, ppg: 4.2, gamesPlayed: 11, gamesMissed: 6, missedReason: "Knee injury, Weeks 8-13", weekly: [4.6, 2.8, 3.3, 4.0, 3.1, 3.8, 5.6, 5.9, 4.2, 4.5, 4.4] },
      { year: 2024, ppg: 3.5, gamesPlayed: 10, gamesMissed: 7, missedReason: "Hamstring strain, Weeks 2-8", weekly: [4.0, 2.0, 4.3, 2.1, 3.7, 5.1, 2.1, 3.7, 3.9, 4.1] },
      { year: 2025, ppg: 2.8, gamesPlayed: 12, gamesMissed: 5, missedReason: "Hamstring/knee, Weeks 10-14", weekly: [2.1, 3.5, 1.7, 3.0, 4.2, 2.2, 3.1, 2.4, 1.4, 3.7, 2.6, 4.3] },
    ],
  },
  "cade-stover-te": {
    ppg: 1.9,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 2.2, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, Week 10", weekly: [2.2, 1.5, 1.7, 3.0, 2.6, 1.6, 3.0, 2.0, 2.5, 2.9, 2.7, 3.0, 2.6, 1.2, 0.8, 1.9] },
      { year: 2025, ppg: 1.9, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, Weeks 6-8", weekly: [1.4, 2.4, 1.1, 2.0, 2.9, 1.5, 2.1, 1.6, 0.9, 2.6, 1.8, 3.0, 1.3, 1.9] },
    ],
  },
  "grant-calcaterra-te": {
    ppg: 1.7,
    seasons: [
      { year: 2023, ppg: 2.6, gamesPlayed: 13, gamesMissed: 4, missedReason: "Concussion protocol, Weeks 9-12", weekly: [4.2, 1.1, 2.7, 3.8, 3.1, 1.0, 1.8, 2.2, 1.9, 2.3, 3.0, 3.6, 3.1] },
      { year: 2024, ppg: 2.0, gamesPlayed: 12, gamesMissed: 5, missedReason: "Hamstring strain, Weeks 3-7", weekly: [0.8, 2.1, 3.0, 1.4, 2.2, 2.3, 0.9, 2.1, 2.9, 1.8, 2.6, 1.9] },
      { year: 2025, ppg: 1.7, gamesPlayed: 11, gamesMissed: 6, missedReason: "Knee soreness, Weeks 8-13", weekly: [1.3, 2.1, 1.0, 1.8, 2.6, 1.4, 1.9, 1.5, 0.8, 2.3, 1.6] },
    ],
  },
  "ja-tavion-sanders-te": {
    ppg: 2.3,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 3.1, gamesPlayed: 15, gamesMissed: 2, missedReason: "Ankle sprain, Weeks 11-12", weekly: [2.1, 3.3, 1.2, 4.7, 2.1, 2.2, 3.5, 3.2, 4.0, 2.0, 4.0, 2.7, 4.3, 5.1, 2.1] },
      { year: 2025, ppg: 2.3, gamesPlayed: 13, gamesMissed: 4, missedReason: "Hamstring strain, Weeks 6-9", weekly: [1.7, 2.9, 1.4, 2.5, 3.5, 1.8, 2.6, 2.0, 1.1, 3.2, 2.2, 3.6, 1.6] },
    ],
  },
  "foster-moreau-te": {
    ppg: 1.9,
    seasons: [
      { year: 2023, ppg: 4.5, gamesPlayed: 13, gamesMissed: 4, missedReason: "Illness, missed Weeks 3-6", weekly: [3.7, 3.5, 6.6, 3.6, 3.3, 3.2, 4.1, 3.1, 5.8, 6.1, 7.7, 4.5, 3.3] },
      { year: 2024, ppg: 3.2, gamesPlayed: 12, gamesMissed: 5, missedReason: "Shoulder injury, Weeks 10-14", weekly: [2.5, 1.9, 3.5, 2.2, 3.8, 3.1, 2.8, 5.2, 3.1, 3.5, 3.4, 3.4] },
      { year: 2025, ppg: 1.9, gamesPlayed: 10, gamesMissed: 7, missedReason: "Shoulder injury, Weeks 8-14", weekly: [1.4, 2.4, 1.1, 2.0, 2.9, 1.5, 2.2, 1.6, 0.9, 2.6] },
    ],
  },
  "john-bates-te": {
    ppg: 1.6,
    seasons: [
      { year: 2023, ppg: 2.9, gamesPlayed: 16, gamesMissed: 1, missedReason: "Ankle sprain, Week 13", weekly: [2.4, 2.9, 4.9, 3.4, 3.7, 1.9, 2.3, 1.8, 3.1, 3.0, 1.9, 2.2, 3.3, 3.3, 3.2, 3.1] },
      { year: 2024, ppg: 2.3, gamesPlayed: 15, gamesMissed: 2, missedReason: "Knee soreness, Weeks 7-8", weekly: [2.9, 2.5, 2.7, 2.3, 1.7, 1.7, 2.3, 2.8, 1.1, 2.9, 2.7, 2.1, 3.0, 2.5, 1.3] },
      { year: 2025, ppg: 1.6, gamesPlayed: 14, gamesMissed: 3, missedReason: "Hamstring strain, Weeks 10-12", weekly: [1.2, 2.0, 0.9, 1.7, 2.5, 1.3, 1.8, 1.4, 0.7, 2.2, 1.5, 2.6, 1.1, 1.7] },
    ],
  },
  "jaheim-bell-te": {
    ppg: 1.4,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 1.8, gamesPlayed: 12, gamesMissed: 5, missedReason: "Hamstring strain, Weeks 5-9", weekly: [2.5, 2.1, 1.8, 1.4, 1.6, 2.6, 1.1, 1.3, 2.3, 2.1, 1.1, 1.7] },
      { year: 2025, ppg: 1.4, gamesPlayed: 10, gamesMissed: 7, missedReason: "Knee injury, Weeks 3-9", weekly: [1.0, 1.8, 0.7, 1.5, 2.2, 1.1, 1.6, 1.2, 0.5, 2.0] },
    ],
  },
  "cameron-dicker-k": {
    ppg: 9.8,
    seasons: [
      { year: 2023, ppg: 9.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.2, 7.3, 8.3, 11.5, 10.0, 12.3, 7.2, 8.0, 8.0, 10.3, 9.3, 10.4, 7.8, 11.3, 10.4, 10.9, 9.3] },
      { year: 2024, ppg: 10.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.0, 7.6, 15.8, 7.1, 14.8, 13.3, 7.6, 18.7, 8.0, 3.2, 6.6, 10.3, 7.4, 9.4, 10.7, 10.7, 14.2] },
      { year: 2025, ppg: 9.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [10.0, 8.0, 12.0, 9.0, 11.0, 7.0, 13.0, 9.0, 10.0, 8.0, 11.0, 9.0, 10.0, 12.0, 8.0, 9.0, 10.0] },
    ],
  },
  "brandon-aubrey-k": {
    ppg: 10.2,
    seasons: [
      { year: 2023, ppg: 10.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.0, 13.8, 10.6, 11.9, 9.1, 12.8, 7.4, 12.4, 11.1, 13.8, 13.3, 7.6, 12.0, 5.9, 4.7, 13.0, 11.1] },
      { year: 2024, ppg: 11.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.2, 8.3, 15.3, 7.5, 9.1, 22.4, 9.4, 12.9, 11.6, 7.6, 7.9, 16.7, 13.3, 13.6, 13.1, 4.1, 6.0] },
      { year: 2025, ppg: 10.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [11.0, 8.0, 13.0, 9.0, 12.0, 7.0, 14.0, 9.0, 10.0, 8.0, 11.0, 9.0, 10.0, 12.0, 8.0, 9.0, 13.0] },
    ],
  },
  "matthew-wright-k": {
    ppg: 8.3,
    seasons: [
      { year: 2023, ppg: 7.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.2, 5.8, 6.6, 6.8, 9.3, 6.3, 12.3, 7.9, 9.3, 6.2, 11.1, 9.6, 7.6, 2.7, 4.9, 4.7, 7.2] },
      { year: 2024, ppg: 8.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.4, 10.9, 6.9, 9.2, 4.8, 6.4, 13.5, 6.5, 12.0, 10.0, 9.4, 5.8, 7.3, 9.9, 9.0, 5.1, 4.9] },
      { year: 2025, ppg: 8.3, gamesPlayed: 16, gamesMissed: 1, missedReason: "Groin strain, 1 game", weekly: [9.0, 7.0, 10.0, 8.0, 6.0, 11.0, 8.0, 9.0, 7.0, 10.0, 8.0, 9.0, 6.0, 11.0, 8.0, 6.0] },
    ],
  },
  "jake-bates-k": {
    ppg: 8.7,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 8.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [10.2, 13.0, 3.1, 12.0, 11.3, 7.2, 5.0, 5.7, 7.7, 7.9, 14.0, 12.1, 9.0, 6.4, 5.0, 11.7, 3.2] },
      { year: 2025, ppg: 8.7, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.0, 7.0, 10.0, 8.0, 11.0, 6.0, 9.0, 8.0, 10.0, 7.0, 9.0, 8.0, 11.0, 6.0, 9.0, 10.0, 10.0] },
    ],
  },
  "tyler-bass-k": {
    ppg: 8.0,
    seasons: [
      { year: 2023, ppg: 7.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.2, 5.6, 12.3, 9.0, 8.2, 11.1, 12.3, 4.8, 7.3, 7.6, 9.9, 7.0, 4.9, 5.0, 6.0, 8.6, 6.8] },
      { year: 2024, ppg: 8.2, gamesPlayed: 15, gamesMissed: 2, missedReason: "Hip strain, 2 games", weekly: [7.7, 8.2, 8.0, 10.1, 8.7, 7.9, 8.3, 7.7, 10.6, 5.6, 10.1, 6.6, 9.4, 4.4, 9.7] },
      { year: 2025, ppg: 8.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.0, 6.0, 10.0, 7.0, 9.0, 8.0, 6.0, 11.0, 7.0, 9.0, 8.0, 6.0, 10.0, 7.0, 9.0, 8.0, 7.0] },
    ],
  },
  "ka-imi-fairbairn-k": {
    ppg: 7.0,
    seasons: [
      { year: 2023, ppg: 6.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.6, 3.4, 6.0, 2.9, 13.1, 6.1, 9.1, 5.5, 5.4, 7.4, 8.8, 3.9, 8.6, 6.7, 5.2, 4.9, 8.9] },
      { year: 2024, ppg: 6.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.4, 5.2, 9.7, 6.8, 6.5, 5.5, 4.5, 4.5, 3.1, 10.6, 5.1, 10.9, 11.2, 8.1, 5.4, 6.0, 3.1] },
      { year: 2025, ppg: 7.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.0, 5.0, 9.0, 6.0, 8.0, 7.0, 5.0, 9.0, 6.0, 8.0, 7.0, 5.0, 9.0, 6.0, 8.0, 7.0, 7.0] },
    ],
  },
  "evan-mcpherson-k": {
    ppg: 7.2,
    seasons: [
      { year: 2023, ppg: 6.2, gamesPlayed: 15, gamesMissed: 2, missedReason: "Groin strain, 2 games", weekly: [2.8, 7.2, 7.1, 3.9, 5.8, 6.2, 8.7, 8.0, 5.6, 3.7, 6.6, 4.5, 7.6, 7.7, 7.6] },
      { year: 2024, ppg: 6.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.7, 4.5, 4.1, 8.7, 6.7, 11.4, 6.1, 8.5, 4.7, 7.4, 9.2, 6.3, 5.1, 8.8, 5.5, 6.6, 5.0] },
      { year: 2025, ppg: 7.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.0, 5.0, 9.0, 6.0, 8.0, 7.0, 5.0, 10.0, 6.0, 8.0, 7.0, 5.0, 9.0, 6.0, 8.0, 7.0, 7.0] },
    ],
  },
  "jason-myers-k": {
    ppg: 6.8,
    seasons: [
      { year: 2023, ppg: 7.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.0, 9.1, 11.3, 4.3, 8.1, 9.0, 8.0, 4.9, 3.4, 6.8, 5.8, 2.9, 9.0, 5.8, 8.7, 8.7, 6.2] },
      { year: 2024, ppg: 6.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Quad strain, 1 game", weekly: [3.4, 6.8, 3.9, 4.6, 7.1, 8.3, 7.2, 6.1, 6.3, 7.8, 8.5, 6.4, 8.9, 4.0, 7.3, 7.4] },
      { year: 2025, ppg: 6.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.0, 5.0, 9.0, 6.0, 7.0, 6.0, 5.0, 10.0, 6.0, 7.0, 6.0, 5.0, 9.0, 6.0, 7.0, 6.0, 8.0] },
    ],
  },
  "cam-little-k": {
    ppg: 7.3,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 6.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.7, 7.4, 8.9, 6.5, 5.6, 5.6, 5.9, 9.6, 7.4, 4.2, 5.1, 4.5, 7.1, 8.7, 6.3, 8.1, 9.0] },
      { year: 2025, ppg: 7.3, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.0, 6.0, 10.0, 7.0, 8.0, 6.0, 8.0, 7.0, 8.0, 6.0, 8.0, 7.0, 9.0, 6.0, 8.0, 7.0, 7.0] },
    ],
  },
  "tyler-loop-k": {
    ppg: 5.8,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2025, ppg: 5.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.0, 6.0, 8.0, 5.0, 7.0, 4.0, 9.0, 5.0, 6.0, 4.0, 7.0, 5.0, 8.0, 4.0, 6.0, 5.0, 6.0] },
    ],
  },
  "harrison-butker-k": {
    ppg: 8.2,
    seasons: [
      { year: 2023, ppg: 9.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [10.5, 8.6, 12.7, 8.8, 9.2, 8.1, 16.4, 5.6, 5.4, 6.1, 13.4, 12.3, 11.2, 8.2, 12.8, 6.6, 5.6] },
      { year: 2024, ppg: 8.5, gamesPlayed: 13, gamesMissed: 4, missedReason: "Knee injury, 4 games", weekly: [13.0, 9.7, 10.1, 7.3, 10.8, 9.7, 7.4, 10.9, 7.7, 4.4, 4.5, 8.8, 6.2] },
      { year: 2025, ppg: 8.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.0, 6.0, 10.0, 7.0, 9.0, 8.0, 6.0, 11.0, 7.0, 9.0, 8.0, 6.0, 10.0, 7.0, 9.0, 8.0, 7.0] },
    ],
  },
  "joshua-karty-k": {
    ppg: 8.4,
    seasons: [
      { year: 2023, ppg: 0.0, gamesPlayed: 0, gamesMissed: 0, missedReason: "Not in the NFL yet (college)", weekly: [] },
      { year: 2024, ppg: 7.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.6, 5.2, 7.7, 11.2, 6.5, 5.5, 10.9, 7.5, 11.0, 6.7, 8.5, 8.1, 6.3, 10.6, 4.5, 10.2, 8.3] },
      { year: 2025, ppg: 8.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.0, 7.0, 11.0, 8.0, 10.0, 7.0, 9.0, 8.0, 11.0, 7.0, 9.0, 8.0, 10.0, 7.0, 9.0, 8.0, 9.0] },
    ],
  },
  "chris-boswell-k": {
    ppg: 7.5,
    seasons: [
      { year: 2023, ppg: 7.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.3, 8.0, 9.5, 5.8, 9.0, 9.4, 8.2, 8.3, 5.9, 5.0, 5.0, 9.9, 8.7, 6.7, 9.3, 5.9, 9.7] },
      { year: 2024, ppg: 8.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [3.1, 6.1, 7.0, 10.0, 8.2, 6.6, 9.6, 7.4, 6.9, 14.8, 9.9, 6.1, 4.3, 4.6, 6.8, 12.0, 12.6] },
      { year: 2025, ppg: 7.5, gamesPlayed: 16, gamesMissed: 1, missedReason: "Groin strain, 1 game", weekly: [8.0, 6.0, 9.0, 7.0, 8.0, 6.0, 9.0, 7.0, 8.0, 6.0, 9.0, 7.0, 8.0, 6.0, 9.0, 7.0] },
    ],
  },
  "jake-elliott-k": {
    ppg: 6.9,
    seasons: [
      { year: 2023, ppg: 6.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.0, 5.1, 9.3, 9.6, 7.0, 7.3, 12.0, 5.2, 9.6, 4.9, 6.2, 4.8, 5.9, 5.9, 5.0, 4.7, 4.1] },
      { year: 2024, ppg: 7.1, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.7, 9.9, 9.8, 5.3, 5.3, 7.8, 8.8, 4.9, 5.2, 9.3, 7.9, 4.6, 4.4, 9.7, 4.3, 8.9, 8.9] },
      { year: 2025, ppg: 6.9, gamesPlayed: 15, gamesMissed: 2, missedReason: "Quad strain, 2 games", weekly: [7.0, 5.0, 8.0, 6.0, 7.0, 6.0, 8.0, 5.0, 7.0, 6.0, 8.0, 5.0, 7.0, 6.0, 7.0] },
    ],
  },
  "houston-texans-dst": {
    ppg: 8.8,
    seasons: [
      { year: 2023, ppg: 8.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.1, 9.5, 9.7, 12.6, 7.9, 8.8, 9.0, 5.8, 7.0, 8.9, 8.9, 5.9, 9.0, 6.2, 5.6, 9.0, 14.6] },
      { year: 2024, ppg: 9.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.9, 8.5, 5.2, 5.8, 12.5, 12.2, 11.7, 10.6, 10.5, 8.8, 6.0, 10.3, 6.9, 9.1, 7.0, 11.3, 10.1] },
      { year: 2025, ppg: 8.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.0, 6.0, 12.0, 7.0, 10.0, 8.0, 6.0, 14.0, 7.0, 9.0, 8.0, 6.0, 12.0, 7.0, 10.0, 8.0, 11.0] },
    ],
  },
  "seattle-seahawks-dst": {
    ppg: 9.5,
    seasons: [
      { year: 2023, ppg: 8.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.2, 11.4, 9.0, 12.2, 11.9, 9.2, 7.3, 6.3, 7.2, 11.1, 6.7, 10.5, 11.8, 9.0, 7.7, 7.9, 5.2] },
      { year: 2024, ppg: 8.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.9, 8.8, 10.8, 6.2, 5.1, 11.0, 7.4, 11.4, 4.9, 6.7, 11.5, 12.2, 9.9, 9.0, 11.3, 5.6, 7.8] },
      { year: 2025, ppg: 9.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [10.0, 7.0, 13.0, 8.0, 11.0, 9.0, 7.0, 15.0, 8.0, 10.0, 9.0, 7.0, 13.0, 8.0, 11.0, 9.0, 7.0] },
    ],
  },
  "los-angeles-rams-dst": {
    ppg: 9.3,
    seasons: [
      { year: 2023, ppg: 8.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.1, 9.9, 6.3, 9.2, 5.2, 6.4, 6.3, 8.1, 12.8, 5.5, 10.5, 11.3, 11.0, 10.3, 3.4, 6.4, 9.7] },
      { year: 2024, ppg: 9.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [12.2, 12.4, 11.6, 5.8, 9.7, 11.6, 7.8, 5.5, 4.9, 9.2, 10.7, 8.5, 9.2, 6.0, 11.4, 10.5, 6.0] },
      { year: 2025, ppg: 9.3, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [10.0, 7.0, 12.0, 8.0, 11.0, 9.0, 7.0, 14.0, 8.0, 10.0, 9.0, 7.0, 12.0, 8.0, 11.0, 9.0, 6.0] },
    ],
  },
  "baltimore-ravens-dst": {
    ppg: 7.2,
    seasons: [
      { year: 2023, ppg: 7.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [2.6, 10.6, 5.5, 6.9, 3.8, 14.0, 5.8, 10.6, 5.9, 6.2, 5.5, 7.6, 9.9, 4.6, 9.1, 7.7, 11.2] },
      { year: 2024, ppg: 8.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.9, 11.8, 5.8, 10.6, 7.2, 9.2, 6.0, 6.4, 5.4, 9.9, 10.5, 7.2, 11.0, 9.0, 5.1, 8.1, 7.9] },
      { year: 2025, ppg: 7.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.0, 5.0, 10.0, 6.0, 9.0, 7.0, 5.0, 11.0, 6.0, 8.0, 7.0, 5.0, 10.0, 6.0, 8.0, 7.0, 4.0] },
    ],
  },
  "denver-broncos-dst": {
    ppg: 10.0,
    seasons: [
      { year: 2023, ppg: 8.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.8, 10.1, 9.7, 7.7, 11.1, 4.5, 8.0, 10.1, 7.2, 8.0, 8.0, 7.8, 14.1, 2.6, 6.7, 11.1, 4.5] },
      { year: 2024, ppg: 9.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [13.9, 11.1, 7.1, 10.8, 7.3, 8.9, 7.5, 13.1, 9.4, 5.1, 12.2, 8.3, 8.5, 13.1, 7.5, 7.4, 10.3] },
      { year: 2025, ppg: 10.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [10.0, 7.0, 13.0, 9.0, 11.0, 8.0, 10.0, 13.0, 7.0, 11.0, 9.0, 10.0, 12.0, 8.0, 10.0, 11.0, 10.0] },
    ],
  },
  "los-angeles-chargers-dst": {
    ppg: 7.8,
    seasons: [
      { year: 2023, ppg: 6.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.5, 3.7, 8.9, 8.6, 7.8, 6.2, 7.5, 6.1, 5.1, 4.8, 9.7, 4.5, 6.4, 4.0, 9.3, 9.2, 8.3] },
      { year: 2024, ppg: 7.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.8, 11.7, 5.4, 4.7, 5.0, 8.7, 8.3, 5.1, 3.7, 7.1, 7.7, 8.9, 10.0, 7.4, 7.0, 10.2, 6.8] },
      { year: 2025, ppg: 7.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.0, 6.0, 11.0, 7.0, 9.0, 7.0, 6.0, 12.0, 7.0, 9.0, 8.0, 6.0, 11.0, 7.0, 9.0, 8.0, 5.0] },
    ],
  },
  "detroit-lions-dst": {
    ppg: 7.5,
    seasons: [
      { year: 2023, ppg: 7.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.9, 5.5, 5.0, 9.0, 2.6, 5.2, 11.0, 4.9, 8.8, 8.3, 5.0, 5.5, 6.1, 11.3, 9.0, 10.9, 7.4] },
      { year: 2024, ppg: 6.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.6, 10.3, 7.6, 4.6, 5.6, 11.6, 9.4, 3.1, 5.3, 4.1, 7.8, 5.1, 9.8, 6.8, 5.2, 10.3, 4.4] },
      { year: 2025, ppg: 7.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.0, 6.0, 10.0, 7.0, 9.0, 7.0, 6.0, 11.0, 7.0, 8.0, 7.0, 6.0, 10.0, 7.0, 8.0, 7.0, 4.0] },
    ],
  },
  "pittsburgh-steelers-dst": {
    ppg: 7.6,
    seasons: [
      { year: 2023, ppg: 8.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.5, 7.7, 8.6, 9.2, 6.4, 8.6, 6.3, 8.3, 12.1, 9.8, 6.2, 10.5, 6.2, 6.6, 9.5, 5.4, 7.1] },
      { year: 2024, ppg: 7.3, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.9, 7.5, 8.9, 8.0, 6.1, 8.0, 3.6, 4.6, 7.4, 9.1, 9.3, 9.4, 8.5, 6.4, 8.7, 7.8, 4.9] },
      { year: 2025, ppg: 7.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.0, 6.0, 10.0, 7.0, 9.0, 7.0, 6.0, 11.0, 7.0, 8.0, 7.0, 6.0, 10.0, 7.0, 9.0, 7.0, 4.0] },
    ],
  },
  "green-bay-packers-dst": {
    ppg: 6.5,
    seasons: [
      { year: 2023, ppg: 5.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [3.6, 3.5, 4.6, 11.8, 3.5, 5.7, 3.6, 6.5, 4.9, 6.9, 1.9, 9.0, 3.6, 7.4, 8.9, 5.2, 8.0] },
      { year: 2024, ppg: 6.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.4, 7.6, 6.9, 8.7, 2.7, 9.2, 4.2, 3.9, 9.0, 5.0, 5.6, 6.7, 4.4, 6.7, 9.1, 6.4, 3.9] },
      { year: 2025, ppg: 6.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.0, 5.0, 9.0, 6.0, 7.0, 6.0, 5.0, 10.0, 6.0, 7.0, 6.0, 5.0, 9.0, 6.0, 7.0, 6.0, 3.0] },
    ],
  },
  "minnesota-vikings-dst": {
    ppg: 6.2,
    seasons: [
      { year: 2023, ppg: 6.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [4.2, 7.9, 3.7, 5.2, 7.3, 6.8, 5.2, 5.7, 8.1, 7.9, 7.7, 7.8, 7.8, 4.6, 7.0, 9.9, 3.7] },
      { year: 2024, ppg: 5.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.2, 6.5, 5.0, 5.0, 4.5, 8.5, 5.6, 7.0, 2.5, 6.6, 5.0, 5.4, 7.5, 5.8, 6.7, 7.2, 5.3] },
      { year: 2025, ppg: 6.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.0, 4.0, 9.0, 5.0, 7.0, 6.0, 4.0, 9.0, 5.0, 7.0, 6.0, 4.0, 9.0, 5.0, 7.0, 6.0, 4.0] },
    ],
  },
  "philadelphia-eagles-dst": {
    ppg: 8.2,
    seasons: [
      { year: 2023, ppg: 7.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.4, 8.9, 7.1, 5.9, 3.9, 11.3, 7.9, 6.0, 3.7, 9.5, 6.0, 7.3, 9.4, 8.4, 3.8, 6.5, 8.0] },
      { year: 2024, ppg: 7.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [5.9, 4.9, 6.6, 4.4, 9.0, 8.2, 10.7, 13.7, 7.4, 10.7, 2.7, 8.9, 13.6, 7.4, 5.3, 9.6, 3.6] },
      { year: 2025, ppg: 8.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.0, 6.0, 11.0, 7.0, 10.0, 8.0, 6.0, 12.0, 7.0, 9.0, 8.0, 6.0, 11.0, 7.0, 9.0, 8.0, 5.0] },
    ],
  },
  "buffalo-bills-dst": {
    ppg: 6.4,
    seasons: [
      { year: 2023, ppg: 6.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [3.7, 4.2, 7.8, 5.5, 4.0, 6.7, 4.7, 8.6, 8.6, 7.1, 4.5, 4.2, 6.0, 3.9, 6.1, 6.2, 10.2] },
      { year: 2024, ppg: 6.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.3, 5.6, 8.5, 5.2, 3.7, 7.4, 8.4, 5.6, 12.1, 4.6, 8.6, 8.7, 5.5, 6.1, 4.7, 9.6, 3.0] },
      { year: 2025, ppg: 6.4, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.0, 5.0, 9.0, 6.0, 7.0, 6.0, 5.0, 10.0, 6.0, 7.0, 6.0, 5.0, 9.0, 6.0, 7.0, 6.0, 2.0] },
    ],
  },
  "san-francisco-49ers-dst": {
    ppg: 7.6,
    seasons: [
      { year: 2023, ppg: 7.9, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [12.8, 7.5, 5.5, 5.7, 7.6, 9.0, 6.7, 5.9, 12.4, 5.3, 8.8, 5.6, 8.1, 10.2, 6.3, 4.8, 12.1] },
      { year: 2024, ppg: 7.2, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.6, 9.6, 4.9, 4.8, 8.6, 3.5, 5.3, 7.5, 4.8, 5.2, 9.4, 8.5, 9.6, 5.3, 11.7, 6.7, 10.4] },
      { year: 2025, ppg: 7.6, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.0, 6.0, 10.0, 7.0, 9.0, 7.0, 6.0, 11.0, 7.0, 8.0, 7.0, 6.0, 10.0, 7.0, 9.0, 7.0, 4.0] },
    ],
  },
  "cleveland-browns-dst": {
    ppg: 7.0,
    seasons: [
      { year: 2023, ppg: 8.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [10.3, 11.2, 5.3, 9.8, 8.1, 6.3, 6.5, 8.2, 5.5, 4.2, 9.6, 7.9, 5.6, 10.7, 14.8, 5.8, 6.2] },
      { year: 2024, ppg: 6.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [9.2, 6.1, 8.2, 5.3, 6.7, 6.1, 5.9, 4.0, 9.7, 8.8, 3.8, 3.8, 4.9, 6.2, 8.0, 8.3, 5.5] },
      { year: 2025, ppg: 7.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.0, 5.0, 9.0, 6.0, 8.0, 7.0, 5.0, 9.0, 6.0, 8.0, 7.0, 5.0, 9.0, 6.0, 8.0, 7.0, 7.0] },
    ],
  },
  "indianapolis-colts-dst": {
    ppg: 6.3,
    seasons: [
      { year: 2023, ppg: 5.5, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [6.6, 4.5, 6.5, 4.5, 4.4, 4.7, 8.5, 6.0, 3.6, 5.4, 6.7, 6.4, 8.4, 6.1, 2.4, 2.9, 5.9] },
      { year: 2024, ppg: 6.0, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [8.2, 5.6, 3.6, 6.1, 6.0, 6.0, 3.8, 4.5, 3.7, 7.8, 8.4, 4.6, 4.0, 9.0, 7.4, 8.2, 5.1] },
      { year: 2025, ppg: 6.3, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.0, 4.0, 9.0, 5.0, 7.0, 6.0, 4.0, 9.0, 5.0, 7.0, 6.0, 4.0, 9.0, 5.0, 7.0, 6.0, 7.0] },
    ],
  },
  "breece-hall-rb": {
    ppg: 12.5,
    seasons: [
      { year: 2023, ppg: 16.8, gamesPlayed: 17, gamesMissed: 0, missedReason: null, weekly: [7.4, 32.2, 20.8, 14.8, 18.9, 11.4, 15.0, 22.0, 19.3, 21.7, 25.1, 5.5, 24.4, 9.3, 13.6, 11.2, 13.0] },
      { year: 2024, ppg: 11.9, gamesPlayed: 14, gamesMissed: 3, missedReason: "Knee injury lingering from ACL tear, Weeks 9-11", weekly: [14.3, 14.0, 10.3, 12.0, 8.9, 16.5, 13.3, 11.3, 13.3, 10.9, 12.7, 6.6, 13.1, 9.4] },
      { year: 2025, ppg: 12.5, gamesPlayed: 14, gamesMissed: 3, missedReason: "Ankle sprain, Weeks 5-7", weekly: [14.2, 8.6, 16.9, 10.4, 6.1, 13.8, 9.5, 17.6, 11.0, 7.4, 15.2, 10.8, 12.6, 9.0] },
    ],
  },
};
