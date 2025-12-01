/**
 * Work Items Store
 * Manages work items state using Zustand
 */

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useWorkStore = create(
    devtools(
        (set, get) => ({
            // State
            items: [],
            isLoading: false,
            error: null,

            // Computed values
            itemCount: () => get().items.length,

            // Actions
            setItems: (items) => set({ items, error: null }),

            setLoading: (isLoading) => set({ isLoading }),

            setError: (error) => set({ error, isLoading: false }),

            clearItems: () => set({ items: [], error: null }),

            // Load items with service
            loadItems: async (service) => {
                set({ isLoading: true, error: null });
                try {
                    const items = await service.fetchWorkItems();
                    set({ items, isLoading: false });
                } catch (error) {
                    set({ error: error.message, isLoading: false, items: [] });
                }
            },
        }),
        { name: 'WorkStore' }
    )
);
