/**
 * Work Service
 * Handles fetching and transforming work items data
 */

import { sortItems } from '@utils/workUtils';

export class WorkService {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }

    /**
     * Fetch and sort work items
     * @returns {Promise<Array>} Sorted work items
     */
    async fetchWorkItems() {
        try {
            // Simulate async operation even though data is currently synchronous
            await new Promise(resolve => setTimeout(resolve, 0));

            const items = sortItems(this.dataSource);
            return items;
        } catch (error) {
            // Re-throw with more context for error boundaries
            throw new Error(`Unable to load work items: ${error.message}`);
        }
    }

    /**
     * Get a single work item by key
     * @param {string} key - Item key
     * @returns {Promise<Object|null>} Work item or null
     */
    async getWorkItem(key) {
        const items = await this.fetchWorkItems();
        return items.find(item => item.key === key) || null;
    }

    /**
     * Filter work items by criteria
     * @param {Function} predicate - Filter function
     * @returns {Promise<Array>} Filtered items
     */
    async filterItems(predicate) {
        const items = await this.fetchWorkItems();
        return items.filter(predicate);
    }
}

/**
 * Create service instance with autogen pages
 */
export function createWorkService(autogenPages) {
    return new WorkService(autogenPages);
}
