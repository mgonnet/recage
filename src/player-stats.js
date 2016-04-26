import Struct, { types as t } from 'awestruct'
const { float } = t

const resources = Struct({
  food: float,
  wood: float,
  stone: float,
  gold: float
})

export default Struct({
  resources: resources,
  headroom: float,
  u0: float,
  current_age: float,
  num_relics: float,
  trade_bonus: float,
  trade_goods: float,
  trade_production: float,
  pop_current: float,
  decay: float,
  discovery: float,
  ruins: float,
  meat: float,
  berries: float,
  fish: float,
  u10: float,
  total_units_created: float,
  num_kills: float,
  num_items_researched: float,
  percent_map_explored: float,
  u11: float,
  u12: float,
  u13: float,
  u14: float,
  convert_priests: float,
  convert_buildings: float,
  u17: float,
  building_limit: float,
  food_limit: float,
  pop_max: float,
  maintenance: float,
  faith: float,
  faith_recharge_rate: float,
  farm_food_amount: float,
  civilian_pop: float,
  u23: float,
  all_techs_achieved: float,
  military_pop: float,
  conversions: float,
  num_wonders: float,
  razings: float,
  kill_ratio: float,
  player_killed: float,
  tribute_inefficiency: float,
  gold_bonus0: float,
  town_center_unavailable: float,
  total_gold_gathered0: float,
  writing: float,
  u33: float,
  monasteries: float,
  total_resources_tributed: float,
  hold_ruins: float,
  hold_relics: float,
  ore: float,
  captured_unit: float,
  u39: float,
  trade_good_quality: float,
  trade_market_level: float,
  formations: float,
  building_housing_rate: float,
  gather_tax_rate: float,
  gather_accumulator: float,
  decay_rate: float,
  allow_formations: float,
  can_convert: float,
  u49: float,
  p1_kills: float,
  p2_kills: float,
  p3_kills: float,
  p4_kills: float,
  p5_kills: float,
  p6_kills: float,
  p7_kills: float,
  p8_kills: float,
  convert_resistance: float,
  trade_vig_rate: float,
  stone_bonus0: float,
  num_units_queued: float,
  num_units_making: float,
  raider: float,
  boarding_recharge_rate: float,
  starting_villagers: float,
  research_cost_mod: float,
  research_time_mod: float,
  convert_boats: float,
  fish_trap_food: float,
  heal_rate_modifier: float,
  heal_range: float,
  food_bonus: float,
  wood_bonus: float,
  stone_bonus: float,
  gold_bonus: float,
  raider_ability: float,
  berserker_heal_timer: float,
  dominant_sheep_control: float,
  object_cost_summation: float,
  research_cost_summation: float,
  relic_income_summation: float,
  trade_income_summation: float,
  p1_tributed_to: float,
  p2_tributed_to: float,
  p3_tributed_to: float,
  p4_tributed_to: float,
  p5_tributed_to: float,
  p6_tributed_to: float,
  p7_tributed_to: float,
  p8_tributed_to: float,
  p1_unit_kill_worth: float,
  p2_unit_kill_worth: float,
  p3_unit_kill_worth: float,
  p4_unit_kill_worth: float,
  p5_unit_kill_worth: float,
  p6_unit_kill_worth: float,
  p7_unit_kill_worth: float,
  p8_unit_kill_worth: float,
  p1_num_razes: float,
  p2_num_razes: float,
  p3_num_razes: float,
  p4_num_razes: float,
  p5_num_razes: float,
  p6_num_razes: float,
  p7_num_razes: float,
  p8_num_razes: float,
  p1_raze_worth: float,
  p2_raze_worth: float,
  p3_raze_worth: float,
  p4_raze_worth: float,
  p5_raze_worth: float,
  p6_raze_worth: float,
  p7_raze_worth: float,
  p8_raze_worth: float,
  num_castles: float,
  u73: float,
  kills_by_p1: float,
  kills_by_p2: float,
  kills_by_p3: float,
  kills_by_p4: float,
  kills_by_p5: float,
  kills_by_p6: float,
  kills_by_p7: float,
  kills_by_p8: float,
  razings_by_p1: float,
  razings_by_p2: float,
  razings_by_p3: float,
  razings_by_p4: float,
  razings_by_p5: float,
  razings_by_p6: float,
  razings_by_p7: float,
  razings_by_p8: float,
  u90: float,
  u91: float,
  value_killed_by_others: float,
  value_razed_by_others: float,
  p1_tribute_recvd: float,
  p2_tribute_recvd: float,
  p3_tribute_recvd: float,
  p4_tribute_recvd: float,
  p5_tribute_recvd: float,
  p6_tribute_recvd: float,
  p7_tribute_recvd: float,
  p8_tribute_recvd: float,
  current_unit_worth: float,
  current_building_worth: float,
  total_food_gathered: float,
  total_wood_gathered: float,
  total_stone_gathered: float,
  total_gold_gathered: float,
  total_kill_and_raze_worth: float,
  total_tribute_recvd: float,
  total_value_of_razings: float,
  castle_high: float,
  wonder_high: float,
  total_tribute_sent: float,
  convert_min_adj: float,
  convert_max_adj: float,
  convert_resist_min_adj: float,
  convert_resist_max_adj: float,
  convert_building_min: float,
  convert_building_max: float,
  convert_building_chance: float,
  spies: float,
  value_wonders_castles: float,
  food_score: float,
  wood_score: float,
  stone_score: float,
  gold_score: float,
  wood_bonus0: float,
  food_bonus0: float,
  relic_rate: float,
  heresy: float,
  theocracy: float,
  crenellations: float,
  construction_rate_mod: float,
  hun_wonder_bonus: float,
  spies_discount: float
})
