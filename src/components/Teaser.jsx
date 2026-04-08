import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

const saves = [
    { name: "Fortitude", attr: "Con", base: 2, total: 6 },
    { name: "Reflex", attr: "Dex", base: 1, total: 3 },
    { name: "Will", attr: "Cha", base: 4, total: 8 }, // As requested: Will (Char)
  ];

  const skills = [
    { name: "Spellcraft", attr: "Int", base: 5, total: 10 },
    { name: "Knowledge (Arcana)", attr: "Int", base: 4, total: 9 },
    { name: "Knowledge (Exploration)", attr: "Int", base: 2, total: 7 },
    { name: "Knowledge (Planes)", attr: "Int", base: 3, total: 8 },
    { name: "Knowledge (Demonic)", attr: "Int", base: 1, total: 6 },
    { name: "Ride", attr: "Dex", base: 2, total: 4 },
    { name: "Climb", attr: "Str", base: 3, total: 7 },
    { name: "Swim", attr: "Str", base: 0, total: 4 },
    { name: "Intimidate", attr: "Cha", base: 6, total: 10 },
    { name: "Craft (Armorer)", attr: "Int", base: 4, total: 9 },
    { name: "Profession (Soldier)", attr: "Wis", base: 2, total: 5 },
    { name: "Use Magic Device", attr: "Cha", base: 5, total: 9 },
    { name: "Fly", attr: "Dex", base: 1, total: 3 },
    { name: "Listen", attr: "Wis", base: 3, total: 6 },
    { name: "Spot", attr: "Wis", base: 2, total: 5 },
    { name: "Concentration", attr: "Con", base: 4, total: 8 },
    { name: "Appraise", attr: "Int", base: 2, total: 7 },
  ];

const Teaser = ({ blok }) => {
  return (
<div className="flex-auto w-auto min-w-max flex flex-col gap-6 bg-stone-900/40 p-4 rounded-xl border border-stone-800">
  
  {/* BLOCK 1: HIT POINTS */}
  <div className="flex flex-col gap-2 bg-red-950/20 p-3 rounded-lg border border-red-900/30">
    <h3 className="text-xs font-bold uppercase tracking-widest text-red-500 italic">Hit Points</h3>
    <div className="flex items-center gap-4">
      <div className="flex flex-col">
        <label className="text-[10px] text-stone-500 uppercase">Current</label>
        <input type="number" className="bg-stone-800 border border-stone-700 text-2xl font-bold text-white w-20 px-2 py-1 rounded shadow-inner focus:outline-none focus:border-red-500" placeholder="84" />
      </div>
      <div className="text-2xl font-bold text-stone-600 self-end mb-1">/</div>
      <div className="flex flex-col">
        <label className="text-[10px] text-stone-500 uppercase">Max</label>
        <span className="text-2xl font-bold text-stone-300 px-2 py-1">112</span>
      </div>
    </div>
  </div>

  {/* BLOCK 2: DEFENSE & UTILITY */}
  <div className="grid grid-cols-3 gap-2">
    <div className="flex flex-col items-center justify-center bg-stone-800/50 p-2 rounded border border-stone-700">
      <label className="text-[10px] font-bold text-stone-500 uppercase">AC</label>
      <span className="text-xl font-bold text-amber-500">22</span>
    </div>
    <div className="flex flex-col items-center justify-center bg-stone-800/50 p-2 rounded border border-stone-700">
      <label className="text-[10px] font-bold text-stone-500 uppercase">Speed</label>
      <span className="text-xl font-bold text-stone-200">30ft</span>
    </div>
    <div className="flex flex-col items-center justify-center bg-stone-800/50 p-2 rounded border border-stone-700">
      <label className="text-[10px] font-bold text-stone-500 uppercase">Init</label>
      <span className="text-xl font-bold text-stone-200">+2</span>
    </div>
  </div>

  {/* BLOCK 3: SPELLCASTING */}
  <div className="flex flex-col gap-3 bg-indigo-950/10 p-3 rounded-lg border border-indigo-900/20">
    <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-400">Spellcasting</h3>
    <div className="grid grid-cols-3 gap-4">
      <div>
        <label className="text-[10px] text-stone-500 block uppercase">Ability</label>
        <span className="text-sm font-semibold">CHA</span>
      </div>
      <div>
        <label className="text-[10px] text-stone-500 block uppercase">Save DC</label>
        <span className="text-lg font-bold text-indigo-300">18</span>
      </div>
      <div>
        <label className="text-[10px] text-stone-500 block uppercase">Attack</label>
        <span className="text-lg font-bold text-indigo-300">+10</span>
      </div>
    </div>
  </div>

  {/* BLOCK 4: COMBAT (BAB & OFFENSE) */}
  <div className="flex flex-col gap-3 bg-stone-800/30 p-3 rounded-lg border border-stone-700">
    <div className="flex justify-between items-center border-b border-stone-700 pb-1">
      <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400">Combat</h3>
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-stone-500 uppercase">BAB</span>
        <span className="text-sm font-bold text-stone-200">+12</span>
      </div>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <label className="text-[10px] text-stone-500 uppercase font-semibold">Attack</label>
        <span className="text-xl font-bold text-amber-500">+15</span>
      </div>
      <div className="flex flex-col text-right">
        <label className="text-[10px] text-stone-500 uppercase font-semibold">Damage</label>
        <span className="text-xl font-mono font-bold text-stone-200 text-amber-500">2d6 + 8</span>
      </div>
    </div>
  </div>

</div>
  );
};

export default Teaser;