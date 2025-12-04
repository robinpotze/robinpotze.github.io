/**
 * Work Items Store
 * Manages work items state using Zustand
 */

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useWorkStore = create(
    devtools(
        (set) => ({
            // State
            items: [],

            // Actions
            setItems: (items) => set({ items }),
        }),
        { name: 'WorkStore' }
    )
);
