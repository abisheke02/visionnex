import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '/logo.png'
import './prototypes.css'

// ── Mini-preview HTML snippets (used inside cards) ────────────────────────────

const PREVIEWS = {
  grm: `
    <div style="height:26px;background:#0E1420;border-bottom:1px solid rgba(255,255,255,.06);display:flex;align-items:center;padding:0 8px;gap:6px">
      <div style="width:20px;height:20px;background:#6ABF1E;border-radius:5px;display:grid;place-items:center;font-size:7px;font-weight:900;color:#000;flex-shrink:0">V</div>
      <div style="font-size:7px;color:#fff;font-weight:700">GRM CRM</div>
    </div>
    <div style="display:flex;height:calc(100% - 26px)">
      <div style="width:50px;background:#0E1420;border-right:1px solid rgba(255,255,255,.05);padding:6px 4px">
        <div style="height:5px;background:rgba(59,110,248,.3);border-radius:2px;margin-bottom:4px"></div>
        <div style="height:5px;background:rgba(255,255,255,.05);border-radius:2px;margin-bottom:4px"></div>
        <div style="height:5px;background:rgba(255,255,255,.05);border-radius:2px;margin-bottom:4px"></div>
        <div style="height:5px;background:rgba(255,255,255,.05);border-radius:2px"></div>
      </div>
      <div style="flex:1;padding:6px">
        <div style="display:flex;gap:3px;margin-bottom:5px">
          <div style="flex:1;background:rgba(34,201,122,.1);border:1px solid rgba(34,201,122,.2);border-radius:4px;padding:4px"><div style="font-size:5px;color:#22C97A;margin-bottom:2px">REVENUE</div><div style="font-size:8px;color:#fff;font-weight:700">₹58K</div></div>
          <div style="flex:1;background:rgba(59,110,248,.1);border:1px solid rgba(59,110,248,.2);border-radius:4px;padding:4px"><div style="font-size:5px;color:#7BA8FA;margin-bottom:2px">CLIENTS</div><div style="font-size:8px;color:#fff;font-weight:700">3</div></div>
          <div style="flex:1;background:rgba(245,183,49,.1);border:1px solid rgba(245,183,49,.2);border-radius:4px;padding:4px"><div style="font-size:5px;color:#F5B731;margin-bottom:2px">LEADS</div><div style="font-size:8px;color:#fff;font-weight:700">24</div></div>
        </div>
        <div style="background:#0E1420;border:1px solid rgba(255,255,255,.06);border-radius:4px;padding:5px">
          <div style="font-size:5px;color:#5C6880;margin-bottom:3px">PIPELINE</div>
          <div style="display:flex;gap:2px">
            <div style="flex:1;height:20px;background:rgba(255,255,255,.04);border-radius:2px;padding:2px"><div style="font-size:4px;color:#5C6880">New</div></div>
            <div style="flex:1;height:20px;background:rgba(59,110,248,.08);border-radius:2px;padding:2px"><div style="font-size:4px;color:#7BA8FA">Contact</div></div>
            <div style="flex:1;height:20px;background:rgba(245,183,49,.08);border-radius:2px;padding:2px"><div style="font-size:4px;color:#F5B731">Proposal</div></div>
            <div style="flex:1;height:20px;background:rgba(34,201,122,.08);border-radius:2px;padding:2px"><div style="font-size:4px;color:#22C97A">Won</div></div>
          </div>
        </div>
      </div>
    </div>`,

  ehr: `
    <div style="height:26px;background:#0A2540;border-bottom:1px solid rgba(59,130,246,.15);display:flex;align-items:center;padding:0 8px;gap:6px">
      <div style="width:20px;height:20px;background:#3B82F6;border-radius:5px;display:grid;place-items:center;font-size:9px">🏥</div>
      <div style="font-size:7px;color:#fff;font-weight:700">HealthNex EHR</div>
      <div style="margin-left:auto;font-size:5px;color:#22C97A;background:rgba(34,201,122,.15);padding:1px 5px;border-radius:3px">● LIVE</div>
    </div>
    <div style="display:flex;height:calc(100% - 26px)">
      <div style="width:55px;background:#0A2540;border-right:1px solid rgba(59,130,246,.1);padding:6px 5px">
        <div style="height:5px;background:rgba(59,130,246,.4);border-radius:2px;margin-bottom:3px"></div>
        <div style="height:5px;background:rgba(255,255,255,.05);border-radius:2px;margin-bottom:3px"></div>
        <div style="height:5px;background:rgba(255,255,255,.05);border-radius:2px;margin-bottom:3px"></div>
        <div style="height:5px;background:rgba(255,255,255,.05);border-radius:2px"></div>
      </div>
      <div style="flex:1;padding:6px">
        <div style="display:flex;gap:3px;margin-bottom:4px">
          <div style="flex:1;background:rgba(59,130,246,.1);border-radius:3px;padding:3px"><div style="font-size:5px;color:#7BA8FA">Patients</div><div style="font-size:7px;font-weight:700;color:#fff">1,247</div></div>
          <div style="flex:1;background:rgba(34,201,122,.1);border-radius:3px;padding:3px"><div style="font-size:5px;color:#22C97A">Today OPD</div><div style="font-size:7px;font-weight:700;color:#fff">43</div></div>
        </div>
        <div style="background:rgba(255,255,255,.04);border-radius:3px;padding:4px">
          <div style="font-size:5px;color:#5C6880;margin-bottom:3px">PATIENT RECORDS</div>
          <div style="height:5px;background:rgba(255,255,255,.06);border-radius:2px;margin-bottom:2px"></div>
          <div style="height:5px;background:rgba(255,255,255,.06);border-radius:2px;margin-bottom:2px;width:80%"></div>
          <div style="height:5px;background:rgba(59,130,246,.2);border-radius:2px;margin-bottom:2px"></div>
          <div style="height:5px;background:rgba(255,255,255,.06);border-radius:2px;width:60%"></div>
        </div>
      </div>
    </div>`,

  resto: `
    <div style="height:26px;background:#230A00;border-bottom:1px solid rgba(249,115,22,.15);display:flex;align-items:center;padding:0 8px;gap:6px">
      <div style="width:20px;height:20px;background:#F97316;border-radius:5px;display:grid;place-items:center;font-size:9px">🍽️</div>
      <div style="font-size:7px;color:#fff;font-weight:700">RestoNex POS</div>
      <div style="margin-left:auto;font-size:5px;padding:1px 5px;background:rgba(249,115,22,.2);color:#FB923C;border-radius:3px">TABLE 8 ACTIVE</div>
    </div>
    <div style="padding:6px">
      <div style="display:flex;gap:3px;margin-bottom:4px">
        <div style="flex:1;background:rgba(34,201,122,.1);border-radius:3px;padding:3px;text-align:center"><div style="font-size:5px;color:#22C97A">Orders</div><div style="font-size:7px;font-weight:700;color:#fff">12</div></div>
        <div style="flex:1;background:rgba(249,115,22,.1);border-radius:3px;padding:3px;text-align:center"><div style="font-size:5px;color:#FB923C">Revenue</div><div style="font-size:7px;font-weight:700;color:#fff">₹8,450</div></div>
        <div style="flex:1;background:rgba(59,130,246,.1);border-radius:3px;padding:3px;text-align:center"><div style="font-size:5px;color:#7BA8FA">Tables</div><div style="font-size:7px;font-weight:700;color:#fff">6/10</div></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px">
        <div style="background:rgba(34,201,122,.15);border:1px solid rgba(34,201,122,.2);border-radius:3px;padding:3px;text-align:center;font-size:5px;color:#22C97A">T1 ✓</div>
        <div style="background:rgba(249,115,22,.15);border:1px solid rgba(249,115,22,.2);border-radius:3px;padding:3px;text-align:center;font-size:5px;color:#FB923C">T2 🔥</div>
        <div style="background:rgba(255,255,255,.04);border-radius:3px;padding:3px;text-align:center;font-size:5px;color:#5C6880">T3 Free</div>
        <div style="background:rgba(34,201,122,.15);border:1px solid rgba(34,201,122,.2);border-radius:3px;padding:3px;text-align:center;font-size:5px;color:#22C97A">T4 ✓</div>
      </div>
    </div>`,

  school: `
    <div style="height:26px;background:#10182E;border-bottom:1px solid rgba(139,92,246,.15);display:flex;align-items:center;padding:0 8px;gap:6px">
      <div style="width:20px;height:20px;background:#8B5CF6;border-radius:5px;display:grid;place-items:center;font-size:9px">🎓</div>
      <div style="font-size:7px;color:#fff;font-weight:700">SchoolNex ERP</div>
    </div>
    <div style="padding:6px">
      <div style="display:flex;gap:3px;margin-bottom:4px">
        <div style="flex:1;background:rgba(139,92,246,.1);border-radius:3px;padding:3px"><div style="font-size:5px;color:#A78BFA">Students</div><div style="font-size:7px;font-weight:700;color:#fff">1,842</div></div>
        <div style="flex:1;background:rgba(34,201,122,.1);border-radius:3px;padding:3px"><div style="font-size:5px;color:#22C97A">Attendance</div><div style="font-size:7px;font-weight:700;color:#fff">94%</div></div>
        <div style="flex:1;background:rgba(245,183,49,.1);border-radius:3px;padding:3px"><div style="font-size:5px;color:#F5B731">Fee Due</div><div style="font-size:7px;font-weight:700;color:#fff">₹2.4L</div></div>
      </div>
      <div style="background:rgba(255,255,255,.04);border-radius:3px;padding:4px">
        <div style="font-size:5px;color:#5C6880;margin-bottom:2px">CLASS ATTENDANCE TODAY</div>
        <div style="display:flex;gap:1px;align-items:flex-end;height:18px">
          <div style="flex:1;background:#8B5CF6;border-radius:1px;height:80%"></div>
          <div style="flex:1;background:#8B5CF6;border-radius:1px;height:95%"></div>
          <div style="flex:1;background:#8B5CF6;border-radius:1px;height:70%"></div>
          <div style="flex:1;background:#8B5CF6;border-radius:1px;height:90%"></div>
          <div style="flex:1;background:#8B5CF6;border-radius:1px;height:85%"></div>
          <div style="flex:1;background:#F04040;border-radius:1px;height:60%"></div>
        </div>
      </div>
    </div>`,

  realestate: `
    <div style="height:26px;background:#0F1E00;border-bottom:1px solid rgba(106,191,30,.15);display:flex;align-items:center;padding:0 8px;gap:6px">
      <div style="width:20px;height:20px;background:#6ABF1E;border-radius:5px;display:grid;place-items:center;font-size:9px">🏘️</div>
      <div style="font-size:7px;color:#fff;font-weight:700">PlotNex CRM</div>
    </div>
    <div style="padding:6px">
      <div style="display:flex;gap:3px;margin-bottom:4px">
        <div style="flex:1;background:rgba(106,191,30,.1);border-radius:3px;padding:3px"><div style="font-size:5px;color:#6ABF1E">Plots</div><div style="font-size:7px;font-weight:700;color:#fff">124</div></div>
        <div style="flex:1;background:rgba(34,201,122,.1);border-radius:3px;padding:3px"><div style="font-size:5px;color:#22C97A">Sold</div><div style="font-size:7px;font-weight:700;color:#fff">38</div></div>
        <div style="flex:1;background:rgba(245,183,49,.1);border-radius:3px;padding:3px"><div style="font-size:5px;color:#F5B731">Commission</div><div style="font-size:7px;font-weight:700;color:#fff">₹84K</div></div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:1px">
        <div style="height:10px;background:#6ABF1E;border-radius:1px;opacity:.8"></div>
        <div style="height:10px;background:#F04040;border-radius:1px;opacity:.8"></div>
        <div style="height:10px;background:#6ABF1E;border-radius:1px;opacity:.8"></div>
        <div style="height:10px;background:rgba(255,255,255,.1);border-radius:1px"></div>
        <div style="height:10px;background:#6ABF1E;border-radius:1px;opacity:.8"></div>
        <div style="height:10px;background:rgba(255,255,255,.1);border-radius:1px"></div>
      </div>
      <div style="margin-top:4px;font-size:5px;color:#5C6880;display:flex;gap:6px"><span style="color:#6ABF1E">■ Available</span><span style="color:#F04040">■ Sold</span></div>
    </div>`,

  gym: `
    <div style="height:26px;background:#230015;border-bottom:1px solid rgba(240,64,64,.15);display:flex;align-items:center;padding:0 8px;gap:6px">
      <div style="width:20px;height:20px;background:#F04040;border-radius:5px;display:grid;place-items:center;font-size:9px">💪</div>
      <div style="font-size:7px;color:#fff;font-weight:700">FitNex — Gym Manager</div>
    </div>
    <div style="padding:6px">
      <div style="display:flex;gap:3px;margin-bottom:4px">
        <div style="flex:1;background:rgba(240,64,64,.1);border-radius:3px;padding:3px"><div style="font-size:5px;color:#F04040">Members</div><div style="font-size:7px;font-weight:700;color:#fff">284</div></div>
        <div style="flex:1;background:rgba(34,201,122,.1);border-radius:3px;padding:3px"><div style="font-size:5px;color:#22C97A">Active</div><div style="font-size:7px;font-weight:700;color:#fff">218</div></div>
        <div style="flex:1;background:rgba(245,183,49,.1);border-radius:3px;padding:3px"><div style="font-size:5px;color:#F5B731">Revenue</div><div style="font-size:7px;font-weight:700;color:#fff">₹1.8L</div></div>
      </div>
      <div style="background:rgba(255,255,255,.04);border-radius:3px;padding:4px">
        <div style="font-size:5px;color:#5C6880;margin-bottom:3px">MEMBERSHIP EXPIRY THIS WEEK</div>
        <div style="height:5px;background:rgba(240,64,64,.3);border-radius:2px;margin-bottom:2px;width:70%"></div>
        <div style="height:5px;background:rgba(240,64,64,.2);border-radius:2px;margin-bottom:2px;width:45%"></div>
        <div style="height:5px;background:rgba(240,64,64,.2);border-radius:2px;width:85%"></div>
      </div>
    </div>`,

  retail: `
    <div style="height:26px;background:#002030;border-bottom:1px solid rgba(20,184,166,.15);display:flex;align-items:center;padding:0 8px;gap:6px">
      <div style="width:20px;height:20px;background:#14B8A6;border-radius:5px;display:grid;place-items:center;font-size:9px">🛒</div>
      <div style="font-size:7px;color:#fff;font-weight:700">StoreNex Inventory</div>
    </div>
    <div style="padding:6px">
      <div style="display:flex;gap:3px;margin-bottom:4px">
        <div style="flex:1;background:rgba(20,184,166,.1);border-radius:3px;padding:3px"><div style="font-size:5px;color:#14B8A6">Products</div><div style="font-size:7px;font-weight:700;color:#fff">1,284</div></div>
        <div style="flex:1;background:rgba(240,64,64,.1);border-radius:3px;padding:3px"><div style="font-size:5px;color:#F04040">Low Stock</div><div style="font-size:7px;font-weight:700;color:#fff">23</div></div>
        <div style="flex:1;background:rgba(34,201,122,.1);border-radius:3px;padding:3px"><div style="font-size:5px;color:#22C97A">Today Sales</div><div style="font-size:7px;font-weight:700;color:#fff">₹24K</div></div>
      </div>
      <div style="background:rgba(255,255,255,.04);border-radius:3px;padding:4px">
        <div style="font-size:5px;color:#5C6880;margin-bottom:3px">STOCK LEVELS</div>
        <div style="display:flex;gap:2px;align-items:flex-end;height:16px">
          <div style="flex:1;background:#14B8A6;border-radius:1px;height:90%"></div>
          <div style="flex:1;background:#14B8A6;border-radius:1px;height:60%"></div>
          <div style="flex:1;background:#F04040;border-radius:1px;height:20%"></div>
          <div style="flex:1;background:#14B8A6;border-radius:1px;height:75%"></div>
          <div style="flex:1;background:#F5B731;border-radius:1px;height:35%"></div>
          <div style="flex:1;background:#14B8A6;border-radius:1px;height:85%"></div>
        </div>
      </div>
    </div>`,

  moneylix: `
    <div style="height:26px;background:#0E1420;border-bottom:1px solid rgba(59,110,248,.15);display:flex;align-items:center;padding:0 8px;gap:6px">
      <div style="width:20px;height:20px;background:#3B6EF8;border-radius:5px;display:grid;place-items:center;font-size:7px;font-weight:900;color:#fff">M</div>
      <div style="font-size:7px;color:#fff;font-weight:700">Moneylix — Finance</div>
    </div>
    <div style="padding:6px">
      <div style="background:linear-gradient(135deg,rgba(59,110,248,.15),rgba(139,92,246,.1));border:1px solid rgba(59,110,248,.2);border-radius:4px;padding:5px;margin-bottom:4px;text-align:center">
        <div style="font-size:5px;color:#7BA8FA;margin-bottom:2px">TOTAL BALANCE</div>
        <div style="font-size:10px;font-weight:700;color:#fff">₹2,84,320</div>
      </div>
      <div style="display:flex;gap:3px">
        <div style="flex:1;background:rgba(34,201,122,.1);border-radius:3px;padding:3px"><div style="font-size:5px;color:#22C97A">Income</div><div style="font-size:6px;font-weight:700;color:#fff">₹58K</div></div>
        <div style="flex:1;background:rgba(240,64,64,.1);border-radius:3px;padding:3px"><div style="font-size:5px;color:#F04040">Expense</div><div style="font-size:6px;font-weight:700;color:#fff">₹22K</div></div>
        <div style="flex:1;background:rgba(245,183,49,.1);border-radius:3px;padding:3px"><div style="font-size:5px;color:#F5B731">Savings</div><div style="font-size:6px;font-weight:700;color:#fff">₹36K</div></div>
      </div>
    </div>`,

  portal: `
    <div style="height:26px;background:#141B28;border-bottom:1px solid rgba(106,191,30,.1);display:flex;align-items:center;padding:0 8px;gap:6px">
      <div style="width:20px;height:20px;background:#6ABF1E;border-radius:5px;display:grid;place-items:center;font-size:7px;font-weight:900;color:#000">V</div>
      <div style="font-size:7px;color:#fff;font-weight:700">Client Portal</div>
      <div style="margin-left:auto;font-size:5px;color:#22C97A">● Active Project</div>
    </div>
    <div style="padding:6px">
      <div style="background:rgba(106,191,30,.08);border:1px solid rgba(106,191,30,.15);border-radius:4px;padding:5px;margin-bottom:4px">
        <div style="font-size:5px;color:#6ABF1E;margin-bottom:2px">PROJECT PROGRESS</div>
        <div style="height:5px;background:rgba(255,255,255,.06);border-radius:3px;overflow:hidden"><div style="width:75%;height:100%;background:linear-gradient(90deg,#6ABF1E,#3B6EF8);border-radius:3px"></div></div>
        <div style="font-size:5px;color:#fff;margin-top:2px;text-align:right">75% complete</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:2px">
        <div style="height:5px;background:rgba(34,201,122,.15);border-radius:2px;display:flex;align-items:center;padding:0 3px"><div style="width:3px;height:3px;background:#22C97A;border-radius:50%;margin-right:2px"></div><span style="font-size:4px;color:#22C97A">Delivered</span></div>
        <div style="height:5px;background:rgba(245,183,49,.1);border-radius:2px;display:flex;align-items:center;padding:0 3px"><div style="width:3px;height:3px;background:#F5B731;border-radius:50%;margin-right:2px"></div><span style="font-size:4px;color:#F5B731">In progress</span></div>
      </div>
    </div>`,
}

// ── Full inline demo HTML generators ─────────────────────────────────────────

function getGRMDemo() {
  return `<div style="font-family:'Inter',sans-serif;background:#080C14;min-height:600px;color:#fff;display:flex">
    <div style="width:200px;background:#0E1420;border-right:1px solid rgba(255,255,255,.07);padding:16px;flex-shrink:0">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px">
        <div style="width:28px;height:28px;background:#6ABF1E;border-radius:7px;display:grid;place-items:center;font-size:12px;font-weight:900;color:#000">V</div>
        <div style="font-size:.85rem;font-weight:700">GRM CRM</div>
      </div>
      <div style="font-size:.65rem;color:rgba(255,255,255,.3);letter-spacing:.1em;margin-bottom:8px">MAIN</div>
      <div style="padding:8px;border-radius:7px;background:rgba(59,110,248,.15);color:#7BA8FA;font-size:.78rem;margin-bottom:4px;cursor:pointer">📊 Dashboard</div>
      <div style="padding:8px;border-radius:7px;color:rgba(255,255,255,.5);font-size:.78rem;margin-bottom:4px;cursor:pointer">👥 Clients</div>
      <div style="padding:8px;border-radius:7px;color:rgba(255,255,255,.5);font-size:.78rem;margin-bottom:4px;cursor:pointer">🎯 Leads</div>
      <div style="padding:8px;border-radius:7px;color:rgba(255,255,255,.5);font-size:.78rem;margin-bottom:4px;cursor:pointer">📋 Tasks</div>
      <div style="padding:8px;border-radius:7px;color:rgba(255,255,255,.5);font-size:.78rem;cursor:pointer">🧾 Invoices</div>
    </div>
    <div style="flex:1;padding:20px;overflow-y:auto">
      <div style="font-size:1rem;font-weight:700;margin-bottom:16px">Good morning, Karthik 👋</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px">
        <div style="background:rgba(34,201,122,.1);border:1px solid rgba(34,201,122,.2);border-radius:10px;padding:14px">
          <div style="font-size:.68rem;color:#22C97A;margin-bottom:4px">MONTHLY REVENUE</div>
          <div style="font-size:1.5rem;font-weight:700">₹58,000</div>
          <div style="font-size:.7rem;color:rgba(255,255,255,.4);margin-top:2px">↑ +18% vs last month</div>
        </div>
        <div style="background:rgba(59,110,248,.1);border:1px solid rgba(59,110,248,.2);border-radius:10px;padding:14px">
          <div style="font-size:.68rem;color:#7BA8FA;margin-bottom:4px">ACTIVE CLIENTS</div>
          <div style="font-size:1.5rem;font-weight:700">34</div>
          <div style="font-size:.7rem;color:rgba(255,255,255,.4);margin-top:2px">3 new this month</div>
        </div>
        <div style="background:rgba(245,183,49,.1);border:1px solid rgba(245,183,49,.2);border-radius:10px;padding:14px">
          <div style="font-size:.68rem;color:#F5B731;margin-bottom:4px">OPEN LEADS</div>
          <div style="font-size:1.5rem;font-weight:700">24</div>
          <div style="font-size:.7rem;color:rgba(255,255,255,.4);margin-top:2px">8 follow-up today</div>
        </div>
      </div>
      <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px">
        <div style="font-size:.82rem;font-weight:600;margin-bottom:12px">Sales Pipeline</div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
          ${['New Lead','Contacted','Proposal Sent','Won'].map((stage, i) => {
            const counts = [8,6,5,3]; const colors = ['#5C6880','#7BA8FA','#F5B731','#22C97A'];
            return `<div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:8px;padding:10px">
              <div style="font-size:.65rem;color:${colors[i]};margin-bottom:6px">${stage.toUpperCase()}</div>
              <div style="font-size:1.2rem;font-weight:700;color:#fff">${counts[i]}</div>
              <div style="font-size:.62rem;color:rgba(255,255,255,.3);margin-top:3px">leads</div>
            </div>`;
          }).join('')}
        </div>
      </div>
    </div>
  </div>`
}

function getEHRDemo() {
  return `<div style="font-family:'Inter',sans-serif;background:#061B2E;min-height:600px;color:#fff;display:flex">
    <div style="width:200px;background:#0A2540;border-right:1px solid rgba(59,130,246,.15);padding:16px;flex-shrink:0">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px">
        <div style="width:28px;height:28px;background:#3B82F6;border-radius:7px;display:grid;place-items:center;font-size:12px">🏥</div>
        <div style="font-size:.85rem;font-weight:700">HealthNex EHR</div>
      </div>
      <div style="font-size:.65rem;color:rgba(255,255,255,.3);letter-spacing:.1em;margin-bottom:8px">MAIN</div>
      <div style="padding:8px;border-radius:7px;background:rgba(59,130,246,.15);color:#7BA8FA;font-size:.78rem;margin-bottom:4px;cursor:pointer">📊 Dashboard</div>
      <div style="padding:8px;border-radius:7px;color:rgba(255,255,255,.5);font-size:.78rem;margin-bottom:4px;cursor:pointer">👥 Patients</div>
      <div style="padding:8px;border-radius:7px;color:rgba(255,255,255,.5);font-size:.78rem;margin-bottom:4px;cursor:pointer">📋 OPD Queue</div>
      <div style="padding:8px;border-radius:7px;color:rgba(255,255,255,.5);font-size:.78rem;margin-bottom:4px;cursor:pointer">💊 Prescriptions</div>
      <div style="padding:8px;border-radius:7px;color:rgba(255,255,255,.5);font-size:.78rem;margin-bottom:4px;cursor:pointer">🧪 Lab Reports</div>
      <div style="padding:8px;border-radius:7px;color:rgba(255,255,255,.5);font-size:.78rem;cursor:pointer">💰 Billing</div>
    </div>
    <div style="flex:1;padding:20px;overflow-y:auto">
      <div style="font-size:1rem;font-weight:700;margin-bottom:16px">Good morning, Dr. Rajan 👋</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px">
        <div style="background:rgba(59,130,246,.1);border:1px solid rgba(59,130,246,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#7BA8FA;margin-bottom:4px">TODAY'S OPD</div><div style="font-size:1.5rem;font-weight:700">43</div><div style="font-size:.7rem;color:rgba(255,255,255,.4);margin-top:2px">12 waiting</div></div>
        <div style="background:rgba(34,201,122,.1);border:1px solid rgba(34,201,122,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#22C97A;margin-bottom:4px">TOTAL PATIENTS</div><div style="font-size:1.5rem;font-weight:700">1,247</div><div style="font-size:.7rem;color:rgba(255,255,255,.4);margin-top:2px">+8 this week</div></div>
        <div style="background:rgba(245,183,49,.1);border:1px solid rgba(245,183,49,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#F5B731;margin-bottom:4px">TODAY REVENUE</div><div style="font-size:1.5rem;font-weight:700">₹24,800</div><div style="font-size:.7rem;color:rgba(255,255,255,.4);margin-top:2px">↑ +12% vs yesterday</div></div>
        <div style="background:rgba(139,92,246,.1);border:1px solid rgba(139,92,246,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#A78BFA;margin-bottom:4px">PENDING LAB</div><div style="font-size:1.5rem;font-weight:700">7</div><div style="font-size:.7rem;color:rgba(255,255,255,.4);margin-top:2px">Reports due</div></div>
      </div>
      <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px">
        <div style="font-size:.82rem;font-weight:600;margin-bottom:12px">OPD Queue — Today</div>
        <table style="width:100%;border-collapse:collapse;font-size:.78rem">
          <thead><tr style="border-bottom:1px solid rgba(255,255,255,.07)">
            <th style="text-align:left;padding:8px;color:rgba(255,255,255,.4);font-size:.65rem;font-weight:500">TOKEN</th>
            <th style="text-align:left;padding:8px;color:rgba(255,255,255,.4);font-size:.65rem;font-weight:500">PATIENT</th>
            <th style="text-align:left;padding:8px;color:rgba(255,255,255,.4);font-size:.65rem;font-weight:500">COMPLAINT</th>
            <th style="text-align:left;padding:8px;color:rgba(255,255,255,.4);font-size:.65rem;font-weight:500">STATUS</th>
          </tr></thead>
          <tbody>
            <tr style="border-bottom:1px solid rgba(255,255,255,.05)"><td style="padding:10px;color:#7BA8FA;font-weight:600">#001</td><td style="padding:10px">Rajesh Kumar, 42M</td><td style="padding:10px;color:rgba(255,255,255,.5)">Fever + Cold</td><td style="padding:10px"><span style="background:rgba(34,201,122,.1);color:#22C97A;padding:2px 8px;border-radius:99px;font-size:.65rem">Completed</span></td></tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,.05)"><td style="padding:10px;color:#7BA8FA;font-weight:600">#002</td><td style="padding:10px">Priya S., 28F</td><td style="padding:10px;color:rgba(255,255,255,.5)">Back pain</td><td style="padding:10px"><span style="background:rgba(59,130,246,.1);color:#7BA8FA;padding:2px 8px;border-radius:99px;font-size:.65rem">● In consultation</span></td></tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,.05)"><td style="padding:10px;color:#7BA8FA;font-weight:600">#003</td><td style="padding:10px">Muthu R., 65M</td><td style="padding:10px;color:rgba(255,255,255,.5)">BP checkup</td><td style="padding:10px"><span style="background:rgba(245,183,49,.1);color:#F5B731;padding:2px 8px;border-radius:99px;font-size:.65rem">Waiting</span></td></tr>
            <tr><td style="padding:10px;color:#7BA8FA;font-weight:600">#004</td><td style="padding:10px">Anitha K., 34F</td><td style="padding:10px;color:rgba(255,255,255,.5)">Follow-up</td><td style="padding:10px"><span style="background:rgba(255,255,255,.05);color:rgba(255,255,255,.4);padding:2px 8px;border-radius:99px;font-size:.65rem">Scheduled</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>`
}

function getRestoDemo() {
  const tables = [1,2,3,4,5,6,7,8,9,10].map((t, i) => {
    const statuses = ['occupied','occupied','free','occupied','free','occupied','free','occupied','occupied','free']
    const s = statuses[i]
    const colors = { occupied: 'rgba(249,115,22,.15)', free: 'rgba(34,201,122,.08)' }
    const tc = { occupied: '#FB923C', free: '#22C97A' }
    const amounts = [420, 315, 0, 890, 0, 560, 0, 245, 720, 0]
    return `<div style="background:${colors[s]};border:1px solid ${tc[s]}33;border-radius:10px;padding:12px;text-align:center;cursor:pointer" onclick="alert('Table ${t} — ${s === 'occupied' ? 'View order and generate GST bill' : 'New order'}')">
      <div style="font-size:.75rem;font-weight:700;color:${tc[s]}">T${t}</div>
      <div style="font-size:.62rem;color:${tc[s]};margin-top:3px">${s === 'occupied' ? '🔥 Active' : '✓ Free'}</div>
      ${s === 'occupied' ? `<div style="font-size:.6rem;color:rgba(255,255,255,.4);margin-top:4px">₹${amounts[i]}</div>` : ''}
    </div>`
  }).join('')

  return `<div style="font-family:'Inter',sans-serif;background:#1A0800;min-height:600px;color:#fff;display:flex">
    <div style="width:200px;background:#230A00;border-right:1px solid rgba(249,115,22,.15);padding:16px;flex-shrink:0">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px">
        <div style="width:28px;height:28px;background:#F97316;border-radius:7px;display:grid;place-items:center;font-size:12px">🍽️</div>
        <div style="font-size:.85rem;font-weight:700">RestoNex POS</div>
      </div>
      <div style="font-size:.65rem;color:rgba(255,255,255,.3);letter-spacing:.1em;margin-bottom:8px">SECTIONS</div>
      <div style="padding:8px;border-radius:7px;background:rgba(249,115,22,.15);color:#FB923C;font-size:.78rem;margin-bottom:4px;cursor:pointer">🏠 Tables</div>
      <div style="padding:8px;border-radius:7px;color:rgba(255,255,255,.5);font-size:.78rem;margin-bottom:4px;cursor:pointer">📋 Menu</div>
      <div style="padding:8px;border-radius:7px;color:rgba(255,255,255,.5);font-size:.78rem;margin-bottom:4px;cursor:pointer">🧾 Orders / KOT</div>
      <div style="padding:8px;border-radius:7px;color:rgba(255,255,255,.5);font-size:.78rem;margin-bottom:4px;cursor:pointer">💰 Billing + GST</div>
      <div style="padding:8px;border-radius:7px;color:rgba(255,255,255,.5);font-size:.78rem;cursor:pointer">📊 Daily Report</div>
    </div>
    <div style="flex:1;padding:20px">
      <div style="font-size:1rem;font-weight:700;margin-bottom:6px">Table Management</div>
      <div style="font-size:.78rem;color:rgba(255,255,255,.4);margin-bottom:16px">Sunday, June 29, 2026 · Lunch service active</div>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:20px">${tables}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
        <div style="background:rgba(249,115,22,.1);border:1px solid rgba(249,115,22,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#FB923C;margin-bottom:4px">TODAY'S ORDERS</div><div style="font-size:1.5rem;font-weight:700">34</div></div>
        <div style="background:rgba(34,201,122,.1);border:1px solid rgba(34,201,122,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#22C97A;margin-bottom:4px">REVENUE</div><div style="font-size:1.5rem;font-weight:700">₹18,450</div></div>
        <div style="background:rgba(139,92,246,.1);border:1px solid rgba(139,92,246,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#A78BFA;margin-bottom:4px">GST COLLECTED</div><div style="font-size:1.5rem;font-weight:700">₹1,660</div></div>
      </div>
    </div>
  </div>`
}

function getSchoolDemo() {
  return `<div style="font-family:'Inter',sans-serif;background:#0A1020;min-height:600px;color:#fff;padding:20px">
    <div style="font-size:1rem;font-weight:700;margin-bottom:16px">🎓 SchoolNex ERP — Dashboard</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px">
      <div style="background:rgba(139,92,246,.1);border:1px solid rgba(139,92,246,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#A78BFA;margin-bottom:4px">STUDENTS</div><div style="font-size:1.5rem;font-weight:700">1,842</div></div>
      <div style="background:rgba(34,201,122,.1);border:1px solid rgba(34,201,122,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#22C97A;margin-bottom:4px">ATTENDANCE TODAY</div><div style="font-size:1.5rem;font-weight:700">94.2%</div></div>
      <div style="background:rgba(245,183,49,.1);border:1px solid rgba(245,183,49,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#F5B731;margin-bottom:4px">FEES COLLECTED</div><div style="font-size:1.5rem;font-weight:700">₹12.4L</div></div>
      <div style="background:rgba(240,64,64,.1);border:1px solid rgba(240,64,64,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#F04040;margin-bottom:4px">FEES DUE</div><div style="font-size:1.5rem;font-weight:700">₹2.4L</div></div>
    </div>
    <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px">
      <div style="font-size:.82rem;font-weight:600;margin-bottom:12px">Recent admissions</div>
      <table style="width:100%;border-collapse:collapse;font-size:.78rem">
        <thead><tr style="border-bottom:1px solid rgba(255,255,255,.07)">
          <th style="text-align:left;padding:8px;color:rgba(255,255,255,.4);font-size:.65rem">STUDENT</th>
          <th style="text-align:left;padding:8px;color:rgba(255,255,255,.4);font-size:.65rem">CLASS</th>
          <th style="text-align:left;padding:8px;color:rgba(255,255,255,.4);font-size:.65rem">PARENT</th>
          <th style="text-align:left;padding:8px;color:rgba(255,255,255,.4);font-size:.65rem">FEE STATUS</th>
        </tr></thead>
        <tbody>
          <tr style="border-bottom:1px solid rgba(255,255,255,.05)"><td style="padding:10px">Kavitha R.</td><td style="padding:10px;color:rgba(255,255,255,.5)">Grade 8A</td><td style="padding:10px;color:rgba(255,255,255,.5)">Ramesh R.</td><td style="padding:10px"><span style="background:rgba(34,201,122,.1);color:#22C97A;padding:2px 8px;border-radius:99px;font-size:.65rem">Paid</span></td></tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,.05)"><td style="padding:10px">Arjun M.</td><td style="padding:10px;color:rgba(255,255,255,.5)">Grade 6B</td><td style="padding:10px;color:rgba(255,255,255,.5)">Muthu M.</td><td style="padding:10px"><span style="background:rgba(245,183,49,.1);color:#F5B731;padding:2px 8px;border-radius:99px;font-size:.65rem">Partial</span></td></tr>
          <tr><td style="padding:10px">Divya S.</td><td style="padding:10px;color:rgba(255,255,255,.5)">Grade 10A</td><td style="padding:10px;color:rgba(255,255,255,.5)">Suresh S.</td><td style="padding:10px"><span style="background:rgba(240,64,64,.1);color:#F04040;padding:2px 8px;border-radius:99px;font-size:.65rem">Due</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>`
}

function getRealEstateDemo() {
  const leads = ['Ravi Kumar — ₹8L budget', 'Priya M. — ₹12L budget', 'Senthil K. — ₹6L budget', 'Anand R. — ₹15L budget']
  const soldPlots = [2,5,8,12,15,18,22,25,28,30]
  const plots = Array.from({length:40},(_,i) => {
    const sold = soldPlots.includes(i)
    return `<div style="height:18px;border-radius:3px;background:${sold?'rgba(240,64,64,.3)':'rgba(106,191,30,.2)'};border:1px solid ${sold?'rgba(240,64,64,.4)':'rgba(106,191,30,.3)'};cursor:pointer;font-size:6px;display:grid;place-items:center;color:${sold?'#F04040':'#6ABF1E'}" title="Plot ${i+1}">${i+1}</div>`
  }).join('')
  const leadRows = leads.map(l => {
    const [name, budget] = l.split('—')
    return `<div style="padding:9px 0;border-bottom:1px solid rgba(255,255,255,.06);display:flex;justify-content:space-between;font-size:.78rem"><span>${name}</span><span style="color:#6ABF1E">${budget}</span></div>`
  }).join('')
  return `<div style="font-family:'Inter',sans-serif;background:#0A1500;min-height:600px;color:#fff;padding:20px">
    <div style="font-size:1rem;font-weight:700;margin-bottom:16px">🏘️ PlotNex CRM — Real Estate Management</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px">
      <div style="background:rgba(106,191,30,.1);border:1px solid rgba(106,191,30,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#6ABF1E;margin-bottom:4px">TOTAL PLOTS</div><div style="font-size:1.5rem;font-weight:700">124</div></div>
      <div style="background:rgba(34,201,122,.1);border:1px solid rgba(34,201,122,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#22C97A;margin-bottom:4px">SOLD</div><div style="font-size:1.5rem;font-weight:700">38</div></div>
      <div style="background:rgba(245,183,49,.1);border:1px solid rgba(245,183,49,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#F5B731;margin-bottom:4px">COMMISSION EARNED</div><div style="font-size:1.5rem;font-weight:700">₹84,000</div></div>
      <div style="background:rgba(59,110,248,.1);border:1px solid rgba(59,110,248,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#7BA8FA;margin-bottom:4px">HOT LEADS</div><div style="font-size:1.5rem;font-weight:700">17</div></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
      <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px">
        <div style="font-size:.82rem;font-weight:600;margin-bottom:10px">Recent leads from Meta Ads</div>
        ${leadRows}
      </div>
      <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px">
        <div style="font-size:.82rem;font-weight:600;margin-bottom:10px">Plot availability map</div>
        <div style="display:grid;grid-template-columns:repeat(8,1fr);gap:3px">${plots}</div>
        <div style="display:flex;gap:10px;margin-top:8px;font-size:.68rem"><span style="color:#6ABF1E">■ Available (86)</span><span style="color:#F04040">■ Sold (38)</span></div>
      </div>
    </div>
  </div>`
}

function getGymDemo() {
  return `<div style="font-family:'Inter',sans-serif;background:#1A0010;min-height:600px;color:#fff;padding:20px">
    <div style="font-size:1rem;font-weight:700;margin-bottom:16px">💪 FitNex — Gym Member Management</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px">
      <div style="background:rgba(240,64,64,.1);border:1px solid rgba(240,64,64,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#F04040;margin-bottom:4px">TOTAL MEMBERS</div><div style="font-size:1.5rem;font-weight:700">284</div></div>
      <div style="background:rgba(34,201,122,.1);border:1px solid rgba(34,201,122,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#22C97A;margin-bottom:4px">ACTIVE</div><div style="font-size:1.5rem;font-weight:700">218</div></div>
      <div style="background:rgba(245,183,49,.1);border:1px solid rgba(245,183,49,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#F5B731;margin-bottom:4px">MONTHLY REVENUE</div><div style="font-size:1.5rem;font-weight:700">₹1.84L</div></div>
      <div style="background:rgba(240,64,64,.1);border:1px solid rgba(240,64,64,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#F04040;margin-bottom:4px">EXPIRING THIS WEEK</div><div style="font-size:1.5rem;font-weight:700">12</div></div>
    </div>
    <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px">
      <div style="font-size:.82rem;font-weight:600;margin-bottom:12px">Members expiring this week — Auto WhatsApp reminder sent</div>
      <table style="width:100%;border-collapse:collapse;font-size:.78rem">
        <thead><tr style="border-bottom:1px solid rgba(255,255,255,.07)">
          <th style="text-align:left;padding:8px;color:rgba(255,255,255,.4);font-size:.65rem">MEMBER</th>
          <th style="text-align:left;padding:8px;color:rgba(255,255,255,.4);font-size:.65rem">PLAN</th>
          <th style="text-align:left;padding:8px;color:rgba(255,255,255,.4);font-size:.65rem">EXPIRES</th>
          <th style="text-align:left;padding:8px;color:rgba(255,255,255,.4);font-size:.65rem">REMINDER</th>
          <th style="text-align:left;padding:8px;color:rgba(255,255,255,.4);font-size:.65rem">ACTION</th>
        </tr></thead>
        <tbody>
          <tr style="border-bottom:1px solid rgba(255,255,255,.05)"><td style="padding:10px">Vikram S.</td><td style="padding:10px;color:rgba(255,255,255,.5)">₹1,500/mo</td><td style="padding:10px;color:#F04040">Jun 30</td><td style="padding:10px"><span style="background:rgba(34,201,122,.1);color:#22C97A;padding:2px 8px;border-radius:99px;font-size:.65rem">✓ Sent</span></td><td style="padding:10px"><button onclick="alert('Renewal collected!')" style="background:rgba(106,191,30,.15);color:#6ABF1E;border:1px solid rgba(106,191,30,.2);border-radius:6px;padding:4px 10px;font-size:.7rem;cursor:pointer">Renew</button></td></tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,.05)"><td style="padding:10px">Meena K.</td><td style="padding:10px;color:rgba(255,255,255,.5)">₹4,000/qtr</td><td style="padding:10px;color:#F5B731">Jul 1</td><td style="padding:10px"><span style="background:rgba(34,201,122,.1);color:#22C97A;padding:2px 8px;border-radius:99px;font-size:.65rem">✓ Sent</span></td><td style="padding:10px"><button onclick="alert('Renewal collected!')" style="background:rgba(106,191,30,.15);color:#6ABF1E;border:1px solid rgba(106,191,30,.2);border-radius:6px;padding:4px 10px;font-size:.7rem;cursor:pointer">Renew</button></td></tr>
          <tr><td style="padding:10px">Arun P.</td><td style="padding:10px;color:rgba(255,255,255,.5)">₹12,000/yr</td><td style="padding:10px;color:#F5B731">Jul 2</td><td style="padding:10px"><span style="background:rgba(245,183,49,.1);color:#F5B731;padding:2px 8px;border-radius:99px;font-size:.65rem">Pending</span></td><td style="padding:10px"><button onclick="alert('WhatsApp sent to Arun!')" style="background:rgba(59,110,248,.15);color:#7BA8FA;border:1px solid rgba(59,110,248,.2);border-radius:6px;padding:4px 10px;font-size:.7rem;cursor:pointer">Send WA</button></td></tr>
        </tbody>
      </table>
    </div>
  </div>`
}

function getRetailDemo() {
  return `<div style="font-family:'Inter',sans-serif;background:#001525;min-height:600px;color:#fff;padding:20px">
    <div style="font-size:1rem;font-weight:700;margin-bottom:16px">🛒 StoreNex — Retail Inventory Management</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px">
      <div style="background:rgba(20,184,166,.1);border:1px solid rgba(20,184,166,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#14B8A6;margin-bottom:4px">PRODUCTS</div><div style="font-size:1.5rem;font-weight:700">1,284</div></div>
      <div style="background:rgba(240,64,64,.1);border:1px solid rgba(240,64,64,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#F04040;margin-bottom:4px">LOW STOCK</div><div style="font-size:1.5rem;font-weight:700">23</div></div>
      <div style="background:rgba(34,201,122,.1);border:1px solid rgba(34,201,122,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#22C97A;margin-bottom:4px">TODAY SALES</div><div style="font-size:1.5rem;font-weight:700">₹24,800</div></div>
      <div style="background:rgba(245,183,49,.1);border:1px solid rgba(245,183,49,.2);border-radius:10px;padding:14px"><div style="font-size:.68rem;color:#F5B731;margin-bottom:4px">GST PAYABLE</div><div style="font-size:1.5rem;font-weight:700">₹2,232</div></div>
    </div>
    <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px">
      <div style="font-size:.82rem;font-weight:600;margin-bottom:12px">⚠️ Low stock alerts — Reorder needed</div>
      <table style="width:100%;border-collapse:collapse;font-size:.78rem">
        <thead><tr style="border-bottom:1px solid rgba(255,255,255,.07)">
          <th style="text-align:left;padding:8px;color:rgba(255,255,255,.4);font-size:.65rem">PRODUCT</th>
          <th style="text-align:left;padding:8px;color:rgba(255,255,255,.4);font-size:.65rem">SKU</th>
          <th style="text-align:left;padding:8px;color:rgba(255,255,255,.4);font-size:.65rem">STOCK</th>
          <th style="text-align:left;padding:8px;color:rgba(255,255,255,.4);font-size:.65rem">REORDER LEVEL</th>
          <th style="text-align:left;padding:8px;color:rgba(255,255,255,.4);font-size:.65rem">ACTION</th>
        </tr></thead>
        <tbody>
          <tr style="border-bottom:1px solid rgba(255,255,255,.05)"><td style="padding:10px">Blue Cotton Shirt</td><td style="padding:10px;color:rgba(255,255,255,.4);font-size:.7rem">SKU-4421</td><td style="padding:10px;color:#F04040;font-weight:600">3 units</td><td style="padding:10px;color:rgba(255,255,255,.4)">10 units</td><td style="padding:10px"><button onclick="alert('Purchase order created!')" style="background:rgba(20,184,166,.15);color:#14B8A6;border:1px solid rgba(20,184,166,.2);border-radius:6px;padding:4px 10px;font-size:.7rem;cursor:pointer">Reorder</button></td></tr>
          <tr style="border-bottom:1px solid rgba(255,255,255,.05)"><td style="padding:10px">Black Jeans 32"</td><td style="padding:10px;color:rgba(255,255,255,.4);font-size:.7rem">SKU-2287</td><td style="padding:10px;color:#F5B731;font-weight:600">7 units</td><td style="padding:10px;color:rgba(255,255,255,.4)">15 units</td><td style="padding:10px"><button onclick="alert('Purchase order created!')" style="background:rgba(20,184,166,.15);color:#14B8A6;border:1px solid rgba(20,184,166,.2);border-radius:6px;padding:4px 10px;font-size:.7rem;cursor:pointer">Reorder</button></td></tr>
          <tr><td style="padding:10px">White Formal Shirt</td><td style="padding:10px;color:rgba(255,255,255,.4);font-size:.7rem">SKU-3391</td><td style="padding:10px;color:#F04040;font-weight:600">2 units</td><td style="padding:10px;color:rgba(255,255,255,.4)">8 units</td><td style="padding:10px"><button onclick="alert('Purchase order created!')" style="background:rgba(20,184,166,.15);color:#14B8A6;border:1px solid rgba(20,184,166,.2);border-radius:6px;padding:4px 10px;font-size:.7rem;cursor:pointer">Reorder</button></td></tr>
        </tbody>
      </table>
    </div>
  </div>`
}

function getClientPortalDemo() {
  return `<div style="font-family:'Inter',sans-serif;background:#0E1420;min-height:600px;color:#fff;display:flex">
    <div style="width:200px;background:#141B28;border-right:1px solid rgba(255,255,255,.07);padding:16px;flex-shrink:0">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px">
        <div style="width:28px;height:28px;background:#6ABF1E;border-radius:7px;display:grid;place-items:center;font-size:12px;font-weight:900;color:#000">V</div>
        <div style="font-size:.85rem;font-weight:700">Client Portal</div>
      </div>
      <div style="font-size:.65rem;color:rgba(255,255,255,.3);letter-spacing:.1em;margin-bottom:8px">MY PROJECT</div>
      <div style="padding:8px;border-radius:7px;background:rgba(106,191,30,.15);color:#6ABF1E;font-size:.78rem;margin-bottom:4px;cursor:pointer">📊 Overview</div>
      <div style="padding:8px;border-radius:7px;color:rgba(255,255,255,.5);font-size:.78rem;margin-bottom:4px;cursor:pointer">📦 Deliverables</div>
      <div style="padding:8px;border-radius:7px;color:rgba(255,255,255,.5);font-size:.78rem;margin-bottom:4px;cursor:pointer">💬 Messages</div>
      <div style="padding:8px;border-radius:7px;color:rgba(255,255,255,.5);font-size:.78rem;cursor:pointer">🧾 Invoices</div>
    </div>
    <div style="flex:1;padding:20px;overflow-y:auto">
      <div style="font-size:1rem;font-weight:700;margin-bottom:4px">Welcome back, Arjun 👋</div>
      <div style="font-size:.78rem;color:rgba(255,255,255,.4);margin-bottom:20px">Your website project is 75% complete</div>
      <div style="background:rgba(106,191,30,.06);border:1px solid rgba(106,191,30,.2);border-radius:12px;padding:16px;margin-bottom:16px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
          <div style="font-size:.82rem;font-weight:600">Overall Progress</div>
          <div style="font-size:.82rem;color:#6ABF1E;font-weight:700">75%</div>
        </div>
        <div style="height:8px;background:rgba(255,255,255,.08);border-radius:99px;overflow:hidden">
          <div style="width:75%;height:100%;background:linear-gradient(90deg,#6ABF1E,#3B6EF8);border-radius:99px"></div>
        </div>
      </div>
      <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px">
        <div style="font-size:.82rem;font-weight:600;margin-bottom:12px">Project Milestones</div>
        ${[
          {label:'Design Mockups', status:'done', date:'Jun 10'},
          {label:'Frontend Development', status:'done', date:'Jun 20'},
          {label:'Backend & CMS', status:'progress', date:'Jul 2'},
          {label:'Testing & Launch', status:'pending', date:'Jul 15'},
        ].map(m => {
          const c = m.status === 'done' ? '#22C97A' : m.status === 'progress' ? '#F5B731' : '#5C6880'
          const bg = m.status === 'done' ? 'rgba(34,201,122,.08)' : m.status === 'progress' ? 'rgba(245,183,49,.08)' : 'rgba(255,255,255,.03)'
          const label = m.status === 'done' ? '✓ Delivered' : m.status === 'progress' ? '● In Progress' : '○ Upcoming'
          return `<div style="display:flex;align-items:center;justify-content:space-between;padding:10px;border-radius:8px;background:${bg};margin-bottom:6px">
            <div style="font-size:.8rem">${m.label}</div>
            <div style="display:flex;align-items:center;gap:10px">
              <div style="font-size:.7rem;color:rgba(255,255,255,.4)">${m.date}</div>
              <span style="font-size:.65rem;color:${c};background:rgba(0,0,0,.2);padding:2px 8px;border-radius:99px">${label}</span>
            </div>
          </div>`
        }).join('')}
      </div>
    </div>
  </div>`
}

const DEMO_FNS = {
  grm:        getGRMDemo,
  ehr:        getEHRDemo,
  resto:      getRestoDemo,
  school:     getSchoolDemo,
  realestate: getRealEstateDemo,
  gym:        getGymDemo,
  retail:     getRetailDemo,
  portal:     getClientPortalDemo,
}

// ── Card data ─────────────────────────────────────────────────────────────────

const PROTOS = [
  {
    id: 'grm', cat: 'business',
    accentColor: '#3B6EF8', categoryLabel: 'Business CRM',
    name: 'GRM CRM',
    desc: 'Complete client relationship management — pipeline, leads, tasks, invoices, and monthly revenue tracking. Built for Indian SMBs.',
    tags: ['CRM', 'Pipeline', 'Invoicing', 'Leads'],
    industry: '💼 Business',
    previewBg: 'linear-gradient(135deg,#080C14,#0E1420)',
    previewInnerBg: '#080C14', previewInnerBorder: '1px solid rgba(255,255,255,.08)',
    previewKey: 'grm', demoKey: 'grm', btnLabel: 'Live demo →', external: null,
  },
  {
    id: 'ehr', cat: 'healthcare',
    accentColor: '#3B82F6', categoryLabel: 'Healthcare EHR',
    name: 'HealthNex EHR',
    desc: 'Electronic Health Records system — patient profiles, OPD queue management, prescriptions, lab reports, and billing for hospitals and clinics.',
    tags: ['EHR', 'OPD', 'Prescriptions', 'Lab Reports'],
    industry: '🏥 Healthcare',
    previewBg: 'linear-gradient(135deg,#05101A,#061520)',
    previewInnerBg: '#061B2E', previewInnerBorder: '1px solid rgba(59,130,246,.15)',
    previewKey: 'ehr', demoKey: 'ehr', btnLabel: 'Live demo →', external: null,
  },
  {
    id: 'resto', cat: 'restaurant',
    accentColor: '#F97316', categoryLabel: 'Restaurant POS',
    name: 'RestoNex POS',
    desc: 'GST-compliant POS and billing for Indian restaurants — table management, KOT, instant tax invoices, daily reports, and menu management.',
    tags: ['POS', 'GST Billing', 'KOT', 'Table Mgmt'],
    industry: '🍽️ Restaurant',
    previewBg: 'linear-gradient(135deg,#1A0A00,#200E00)',
    previewInnerBg: '#1A0800', previewInnerBorder: '1px solid rgba(249,115,22,.2)',
    previewKey: 'resto', demoKey: 'resto', btnLabel: 'Live demo →', external: null,
  },
  {
    id: 'school', cat: 'education',
    accentColor: '#8B5CF6', categoryLabel: 'Education ERP',
    name: 'SchoolNex ERP',
    desc: 'Complete school management — admissions, attendance, fee collection, exam results, parent portal, and staff management in one system.',
    tags: ['Admissions', 'Attendance', 'Fee Mgmt', 'Parent App'],
    industry: '🎓 Education',
    previewBg: 'linear-gradient(135deg,#0A1020,#0C1428)',
    previewInnerBg: '#0A1020', previewInnerBorder: '1px solid rgba(139,92,246,.2)',
    previewKey: 'school', demoKey: 'school', btnLabel: 'Live demo →', external: null,
  },
  {
    id: 'realestate', cat: 'realestate',
    accentColor: '#6ABF1E', categoryLabel: 'Real Estate CRM',
    name: 'PlotNex CRM',
    desc: 'Real estate plot sales management — lead tracking from Meta ads, plot availability map, commission calculator, and sales pipeline for Tamil Nadu builders.',
    tags: ['Plot Sales', 'Lead Tracking', 'Meta Ads', 'Commission'],
    industry: '🏘️ Real Estate',
    previewBg: 'linear-gradient(135deg,#0A1200,#0E1A00)',
    previewInnerBg: '#0A1500', previewInnerBorder: '1px solid rgba(106,191,30,.2)',
    previewKey: 'realestate', demoKey: 'realestate', btnLabel: 'Live demo →', external: null,
  },
  {
    id: 'gym', cat: 'fitness',
    accentColor: '#F04040', categoryLabel: 'Fitness Management',
    name: 'FitNex Gym Manager',
    desc: 'Complete gym management — member profiles, membership tracking, renewal reminders via WhatsApp, attendance, and monthly revenue dashboard.',
    tags: ['Members', 'Renewals', 'WhatsApp Alerts', 'Revenue'],
    industry: '💪 Fitness',
    previewBg: 'linear-gradient(135deg,#1A0010,#200014)',
    previewInnerBg: '#1A0010', previewInnerBorder: '1px solid rgba(240,64,64,.2)',
    previewKey: 'gym', demoKey: 'gym', btnLabel: 'Live demo →', external: null,
  },
  {
    id: 'retail', cat: 'retail',
    accentColor: '#14B8A6', categoryLabel: 'Retail Inventory',
    name: 'StoreNex Inventory',
    desc: 'Retail store management — product catalogue, stock levels, low-stock alerts, sales tracking, GST invoicing, and supplier management.',
    tags: ['Inventory', 'GST Invoice', 'Stock Alerts', 'POS'],
    industry: '🛒 Retail',
    previewBg: 'linear-gradient(135deg,#00101A,#001520)',
    previewInnerBg: '#001525', previewInnerBorder: '1px solid rgba(20,184,166,.2)',
    previewKey: 'retail', demoKey: 'retail', btnLabel: 'Live demo →', external: null,
  },
  {
    id: 'moneylix', cat: 'business',
    accentColor: '#3B6EF8', categoryLabel: 'Personal Finance',
    name: 'Moneylix',
    desc: 'Personal finance platform with automatic bank sync via India\'s Account Aggregator, AI transaction categorisation, budgets, and insights.',
    tags: ['Bank Sync', 'AI Insights', 'Budgets', 'Analytics'],
    industry: '💰 Fintech',
    previewBg: 'linear-gradient(135deg,#080C14,#0E1420)',
    previewInnerBg: '#080C14', previewInnerBorder: '1px solid rgba(59,110,248,.2)',
    previewKey: 'moneylix', demoKey: null, btnLabel: 'Visit live →', external: 'https://moneylix.in',
  },
  {
    id: 'portal', cat: 'business',
    accentColor: '#6ABF1E', categoryLabel: 'Client Portal',
    name: 'VisionNex Client Portal',
    desc: 'Your clients log in to track project progress, view deliverables, download invoices, and message the team — all in one branded portal.',
    tags: ['Project Tracking', 'Invoices', 'Messaging', 'Milestones'],
    industry: '💼 Agency Tool',
    previewBg: 'linear-gradient(135deg,#080C14,#0E1420)',
    previewInnerBg: '#0E1420', previewInnerBorder: '1px solid rgba(106,191,30,.15)',
    previewKey: 'portal', demoKey: 'portal', btnLabel: 'Live demo →', external: null,
  },
]

const FILTERS = [
  { key: 'all',        label: 'All prototypes' },
  { key: 'healthcare', label: '🏥 Healthcare' },
  { key: 'business',   label: '💼 Business' },
  { key: 'education',  label: '🎓 Education' },
  { key: 'retail',     label: '🛒 Retail' },
  { key: 'restaurant', label: '🍽️ Restaurant' },
  { key: 'realestate', label: '🏘️ Real Estate' },
  { key: 'fitness',    label: '💪 Fitness' },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function Prototypes() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [modal, setModal] = useState(null) // { title, key }

  const openModal = (title, key) => setModal({ title, key })
  const closeModal = () => setModal(null)

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modal])

  // Body background for dark page
  useEffect(() => {
    document.body.style.background = '#080C14'
    return () => { document.body.style.background = '' }
  }, [])

  // ESC to close modal
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeModal() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const visible = activeFilter === 'all'
    ? PROTOS
    : PROTOS.filter(p => p.cat === activeFilter)

  const demoHtml = modal && modal.key && DEMO_FNS[modal.key]
    ? DEMO_FNS[modal.key]()
    : null

  return (
    <div className="protos-page">

      {/* ── NAV ── */}
      <nav className="pt-nav">
        <div className="pt-wrap pt-nav-inner">
          <Link to="/" className="pt-nav-logo">
            <img src={logo} alt="VisionNex Technologies" className="pt-logo-img" />
          </Link>
          <div className="pt-nav-links">
            <Link to="/" className="pt-nav-link">Home</Link>
            <a href="/#services" className="pt-nav-link">Services</a>
            <a href="/#products" className="pt-nav-link">Products</a>
            <span className="pt-nav-link active">Prototypes</span>
            <a href="/#contact" className="pt-nav-link">Contact</a>
          </div>
          <a
            href="https://wa.me/919894043157"
            target="_blank"
            rel="noopener noreferrer"
            className="pt-nav-cta"
          >
            Get a quote
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div className="pt-hero">
        <div className="pt-wrap">
          <div className="pt-eyebrow">Live interactive demos</div>
          <h1 className="pt-h1">
            See what we build<br />before you <em>invest a rupee</em>
          </h1>
          <p className="pt-hero-sub">
            Every prototype below is a fully working interactive demo — not a screenshot or video. Click through real screens, tap real buttons, and see exactly what your software will look and feel like. Built by VisionNex for clients across industries.
          </p>
        </div>
      </div>

      <div className="pt-wrap">

        {/* ── STATS ── */}
        <div className="pt-stats-bar">
          <div className="pt-stat">
            <div className="pt-stat-num">9</div>
            <div className="pt-stat-lbl">PROTOTYPES LIVE</div>
          </div>
          <div className="pt-stat">
            <div className="pt-stat-num">8</div>
            <div className="pt-stat-lbl">INDUSTRIES COVERED</div>
          </div>
          <div className="pt-stat">
            <div className="pt-stat-num">100%</div>
            <div className="pt-stat-lbl">INTERACTIVE</div>
          </div>
          <div className="pt-stat">
            <div className="pt-stat-num">FREE</div>
            <div className="pt-stat-lbl">TO EXPLORE</div>
          </div>
        </div>

        {/* ── FILTERS ── */}
        <div className="pt-filters">
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`pt-filter-btn${activeFilter === f.key ? ' active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ── GRID ── */}
        <div className="pt-grid">
          {visible.map(p => (
            <div key={p.id} className="pt-card">
              <div className="pt-preview" style={{ background: p.previewBg }}>
                <div
                  className="pt-preview-inner"
                  style={{ background: p.previewInnerBg, border: p.previewInnerBorder }}
                  dangerouslySetInnerHTML={{ __html: PREVIEWS[p.previewKey] }}
                />
              </div>
              <div className="pt-body">
                <div className="pt-category" style={{ color: p.accentColor }}>{p.categoryLabel}</div>
                <div className="pt-name">{p.name}</div>
                <div className="pt-desc">{p.desc}</div>
                <div className="pt-tags">
                  {p.tags.map(t => <span key={t} className="pt-tag">{t}</span>)}
                </div>
                <div className="pt-footer">
                  <div className="pt-industry">{p.industry}</div>
                  {p.external ? (
                    <a
                      href={p.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pt-btn pt-btn-primary"
                    >
                      {p.btnLabel}
                    </a>
                  ) : (
                    <button
                      className="pt-btn pt-btn-primary"
                      onClick={() => openModal(p.name, p.demoKey)}
                    >
                      {p.btnLabel}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── BUILD CTA ── */}
        <div className="pt-build-cta">
          <h2>Don't see your industry?</h2>
          <p>
            We build custom software for any business — hospitals, law firms, logistics, manufacturing, coaching centres, or anything else.
            Tell us what you need and we'll build you a prototype in 48 hours, free, so you can see it before you commit.
          </p>
          <div className="pt-cta-btns">
            <a
              href="https://wa.me/919894043157"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-btn-large"
            >
              WhatsApp for custom prototype →
            </a>
            <a
              href="mailto:hello@visionnextechnologies.com"
              className="pt-btn-wa"
            >
              Email us
            </a>
          </div>
        </div>

      </div>{/* /pt-wrap */}

      {/* ── MODAL ── */}
      {modal && (
        <div
          className="pt-modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
        >
          <div className="pt-modal">
            <div className="pt-modal-header">
              <div>
                <div className="pt-modal-title">{modal.title}</div>
                <div className="pt-modal-subtitle">Interactive demo · Click and explore freely · No sign-up needed</div>
              </div>
              <div className="pt-modal-actions">
                <a
                  href="https://wa.me/919894043157"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-btn pt-btn-primary"
                  style={{ padding: '7px 14px', fontSize: '.75rem' }}
                >
                  Build this for me →
                </a>
                <button className="pt-modal-close" onClick={closeModal} aria-label="Close">✕</button>
              </div>
            </div>
            <div
              className="pt-modal-body"
              dangerouslySetInnerHTML={{ __html: demoHtml || '<p style="padding:40px;color:#888;font-family:Inter,sans-serif">Loading demo...</p>' }}
            />
          </div>
        </div>
      )}

    </div>
  )
}
